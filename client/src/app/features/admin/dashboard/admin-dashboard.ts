import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AdminOrder, OrderService, OrderStatus } from '../../../core/services/OrderService';
import { AuthService } from '../../../core/services/auth-services';

const ORDER_STATUSES: OrderStatus[] = [
  'PENDING',
  'CONFIRMED',
  'PREPARING',
  'READY',
  'COMPLETED',
  'CANCELLED'
];

@Component({
  selector: 'app-admin-dashboard',
  imports: [CurrencyPipe, DatePipe, MatIconModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboard {
  private orderService = inject(OrderService);
  private authService = inject(AuthService);

  readonly orders = signal<AdminOrder[]>([]);
  readonly loading = signal(true);
  readonly updatingOrderId = signal<number | null>(null);
  readonly loadError = signal('');
  readonly actionMessage = signal('');
  readonly actionError = signal('');
  readonly statusFilter = signal<OrderStatus | 'ALL'>('ALL');
  readonly adminName = computed(() => this.authService.currentUser()?.full_name ?? 'Admin');
  readonly menuEditorOpen = signal(false);
  readonly menuName = signal('New menu item');
  readonly menuPrice = signal('');
  readonly menuDescription = signal('');
  readonly menuToppings = signal<string[]>([]);
  readonly newTopping = signal('');
  readonly menuImageName = signal('');
  readonly menuEditorMessage = signal('');

  readonly filters: Array<{ value: OrderStatus | 'ALL'; label: string }> = [
    { value: 'ALL', label: 'All orders' },
    { value: 'PENDING', label: 'Pending' },
    { value: 'CONFIRMED', label: 'Confirmed' },
    { value: 'PREPARING', label: 'Preparing' },
    { value: 'READY', label: 'Ready' },
    { value: 'COMPLETED', label: 'Completed' },
    { value: 'CANCELLED', label: 'Cancelled' }
  ];

  readonly filteredOrders = computed(() => {
    const filter = this.statusFilter();
    return filter === 'ALL'
      ? this.orders()
      : this.orders().filter((order) => order.status === filter);
  });

  readonly pendingCount = computed(
    () => this.orders().filter((order) => order.status === 'PENDING').length
  );

  readonly activeCount = computed(
    () => this.orders().filter(
      (order) => order.status !== 'COMPLETED' && order.status !== 'CANCELLED'
    ).length
  );

  readonly revenue = computed(
    () => this.orders()
      .filter((order) => order.status !== 'CANCELLED')
      .reduce((total, order) => total + order.total_amount, 0)
  );

  constructor() {
    this.refreshOrders();
  }

  refreshOrders(): void {
    this.loading.set(true);
    this.loadError.set('');

    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        this.loadError.set(this.getErrorMessage(error, 'Could not load orders.'));
        this.loading.set(false);
      }
    });
  }

  openMenuEditor(): void {
    this.menuEditorOpen.set(true);
    this.menuEditorMessage.set('');
  }

  closeMenuEditor(): void {
    this.menuEditorOpen.set(false);
    this.menuEditorMessage.set('');
  }

  updateMenuName(event: Event): void {
    const target = event.currentTarget;
    if (target instanceof HTMLInputElement) {
      this.menuName.set(target.value);
    }
  }

  updateMenuPrice(event: Event): void {
    const target = event.currentTarget;
    if (target instanceof HTMLInputElement) {
      this.menuPrice.set(target.value);
    }
  }

  updateMenuDescription(event: Event): void {
    const target = event.currentTarget;
    if (target instanceof HTMLTextAreaElement) {
      this.menuDescription.set(target.value);
    }
  }

  updateNewTopping(event: Event): void {
    const target = event.currentTarget;
    if (target instanceof HTMLInputElement) {
      this.newTopping.set(target.value);
    }
  }

  addTopping(): void {
    const topping = this.newTopping().trim();
    if (!topping) {
      return;
    }

    this.menuToppings.update((toppings) => [...toppings, topping]);
    this.newTopping.set('');
  }

  removeTopping(toppingToRemove: string): void {
    this.menuToppings.update((toppings) => toppings.filter((topping) => topping !== toppingToRemove));
  }

  selectMenuImage(event: Event): void {
    const target = event.currentTarget;
    if (target instanceof HTMLInputElement) {
      this.menuImageName.set(target.files?.[0]?.name ?? '');
    }
  }

  saveMenuPlaceholder(): void {
    this.menuEditorMessage.set('Menu editing is a placeholder. Changes have not been saved.');
  }

  changeStatus(order: AdminOrder, event: Event): void {
    const target = event.currentTarget;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    const status = target.value;
    if (!this.isOrderStatus(status) || status === order.status || this.updatingOrderId() !== null) {
      return;
    }

    this.updatingOrderId.set(order.id);
    this.actionMessage.set('');
    this.actionError.set('');

    this.orderService.updateOrderStatus(order.id, status).subscribe({
      next: (updatedOrder) => {
        this.orders.update((orders) => orders.map((current) =>
          current.id === updatedOrder.id
            ? { ...current, status: updatedOrder.status }
            : current
        ));
        this.actionMessage.set(`Order #${updatedOrder.id} updated to ${this.statusLabel(status)}.`);
        this.updatingOrderId.set(null);
      },
      error: (error: unknown) => {
        this.actionError.set(this.getErrorMessage(error, 'Could not update order status.'));
        this.updatingOrderId.set(null);
      }
    });
  }

  statusLabel(status: OrderStatus): string {
    return status.charAt(0) + status.slice(1).toLowerCase();
  }

  itemSummary(order: AdminOrder): string {
    return order.items.map((item) => `${item.quantity} × ${item.name}`).join(', ');
  }

  trackOrder(_index: number, order: AdminOrder): number {
    return order.id;
  }

  private isOrderStatus(value: string): value is OrderStatus {
    return ORDER_STATUSES.includes(value as OrderStatus);
  }

  private getErrorMessage(error: unknown, fallback: string): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message;
      if (typeof message === 'string') {
        return message;
      }
    }

    return fallback;
  }
}
