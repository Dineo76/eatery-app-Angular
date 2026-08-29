import { Injectable, signal, computed } from '@angular/core';
import { CartItem, MenuItem } from  '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);
  isCartOpen = signal<boolean>(false);

  cartCount = computed(() =>
    this.cart().reduce((acc, item) => acc + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this.cart().reduce((acc, item) => acc + item.item.price * item.quantity, 0)
  );

  toggleCart(): void {
    this.isCartOpen.update((v) => !v);
  }

  addToCart(item: MenuItem): void {
    this.cart.update((current) => {
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
    this.cart.update((current) =>
      current.map((c) =>
        c.item.id === itemId ? { ...c, quantity: c.quantity + 1 } : c
      )
    );
  }

  decrementQuantity(itemId: number): void {
    this.cart.update((current) =>
      current
        .map((c) =>
          c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
        )
        .filter((c) => c.quantity > 0)
    );
  }

  removeFromCart(itemId: number): void {
    this.cart.update((current) => current.filter((c) => c.item.id !== itemId));
  }
}