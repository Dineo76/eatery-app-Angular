import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { interval } from 'rxjs';
import {
  AdminOrder,
  OrderService,
  OrderStatus,
  OrderStatusNotification
} from '../../../core/services/OrderService';

@Component({
  selector: 'app-user-dashboard',
  imports: [CurrencyPipe, DatePipe, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './user-dashboard.html',
  styleUrl: './user-dashboard.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDashboard {
  private readonly orderService = inject(OrderService);
  private readonly destroyRef = inject(DestroyRef);

  readonly orders = signal<AdminOrder[]>([]);
  readonly notifications = signal<OrderStatusNotification[]>([]);
  readonly loading = signal(true);
  readonly loadError = signal('');
  readonly notificationError = signal('');

  constructor() {
    this.refreshOrders();
    interval(30_000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refreshNotifications());
  }

  refreshOrders(): void {
    this.loading.set(true);
    this.loadError.set('');

    this.orderService.getMyOrders().subscribe({
      next: (orders) => {
        this.orders.set(orders);
        this.loading.set(false);
      },
      error: (error: unknown) => {
        this.loadError.set(this.getErrorMessage(error));
        this.loading.set(false);
      }
    });

    this.refreshNotifications();
  }

  refreshNotifications(): void {
    this.notificationError.set('');
    this.orderService.getMyOrderNotifications().subscribe({
      next: (notifications) => {
        this.notifications.set(notifications);
        const latestStatusByOrder = new Map<number, OrderStatus>();
        for (const notification of notifications) {
          if (!latestStatusByOrder.has(notification.order_id)) {
            latestStatusByOrder.set(notification.order_id, notification.new_status);
          }
        }
        this.orders.update((orders) => orders.map((order) => ({
          ...order,
          status: latestStatusByOrder.get(order.id) ?? order.status
        })));
      },
      error: (error: unknown) => this.notificationError.set(this.getNotificationErrorMessage(error))
    });
  }

  markNotificationRead(notification: OrderStatusNotification): void {
    if (notification.read_at !== null) {
      return;
    }

    this.orderService.markOrderNotificationRead(notification.id).subscribe({
      next: ({ read_at }) => {
        this.notifications.update((notifications) => notifications.map((current) =>
          current.id === notification.id ? { ...current, read_at } : current
        ));
      },
      error: (error: unknown) => this.notificationError.set(this.getNotificationErrorMessage(error))
    });
  }

  statusLabel(status: OrderStatus): string {
    switch (status) {
      case 'PENDING':
        return 'Order received';
      case 'CONFIRMED':
        return 'Confirmed';
      case 'PREPARING':
        return 'Being prepared';
      case 'READY':
        return 'Ready for delivery';
      case 'COMPLETED':
        return 'Completed';
      case 'CANCELLED':
        return 'Cancelled';
    }
  }

  itemCount(order: AdminOrder): number {
    return order.items.reduce((count, item) => count + item.quantity, 0);
  }

  trackOrder(_index: number, order: AdminOrder): number {
    return order.id;
  }

  trackNotification(_index: number, notification: OrderStatusNotification): number {
    return notification.id;
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message;
      if (typeof message === 'string') {
        return message;
      }
    }

    return 'Could not load your orders. Please try again.';
  }

  private getNotificationErrorMessage(error: unknown): string {
    if (error instanceof HttpErrorResponse) {
      const message = error.error?.message;
      if (typeof message === 'string') {
        return message;
      }
    }

    return 'Could not load order notifications. Please try again.';
  }
}
