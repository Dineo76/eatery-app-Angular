import { Injectable, computed, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth-services';
import { CartItem, MenuItem } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly authService = inject(AuthService);
  private readonly cartsByUser = signal<Record<number, CartItem[]>>({});
  readonly cart = computed(() => {
    const userId = this.authService.currentUser()?.id;
    return userId === undefined ? [] : this.cartsByUser()[userId] ?? [];
  });
  readonly isCartOpen = signal(false);

  // Property aliases for checkout integration
  readonly cartItems = this.cart;
  readonly totalAmount = computed(() => this.cartTotal());

  readonly cartCount = computed(() =>
    this.cart().reduce((acc, item) => acc + item.quantity, 0)
  );

  readonly cartTotal = computed(() =>
    this.cart().reduce((acc, item) => acc + item.item.price * item.quantity, 0)
  );

  toggleCart(): void {
    this.isCartOpen.update((v) => !v);
  }

  addToCart(item: MenuItem): void {
    this.updateCurrentUserCart((current) => {
      const existing = current.find((c) => c.item.id === item.id);
      if (existing) {
        return current.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...current, { item, quantity: 1 }];
    });
  }

  incrementQuantity(itemId: number): void {
    this.updateCurrentUserCart((current) =>
      current.map((c) =>
        c.item.id === itemId ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  }

  decrementQuantity(itemId: number): void {
    this.updateCurrentUserCart((current) =>
      current
        .map((c) =>
          c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
        )
        .filter((c) => c.quantity > 0)
    );
  }

  removeFromCart(itemId: number): void {
    this.updateCurrentUserCart((current) => current.filter((c) => c.item.id !== itemId));
  }

  clearCart(): void {
    this.updateCurrentUserCart(() => []);
  }

  private updateCurrentUserCart(update: (cart: CartItem[]) => CartItem[]): void {
    const userId = this.authService.currentUser()?.id;
    if (userId === undefined) {
      return;
    }

    this.cartsByUser.update((carts) => ({
      ...carts,
      [userId]: update(carts[userId] ?? [])
    }));
  }
}