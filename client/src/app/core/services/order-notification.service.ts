import { DestroyRef, Injectable, computed, effect, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EMPTY, Subscription, catchError, switchMap, tap, timer } from 'rxjs';
import { AuthService } from './auth-services';
import { OrderService, OrderStatusNotification } from './OrderService';

@Injectable({
  providedIn: 'root'
})
export class OrderNotificationService {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly orderService = inject(OrderService);
  private activeUserId: number | null = null;
  private pollSubscription?: Subscription;

  readonly notifications = signal<OrderStatusNotification[]>([]);
  readonly unreadCount = computed(
    () => this.notifications().filter((notification) => notification.read_at === null).length
  );
  readonly error = signal('');

  constructor() {
    effect(() => {
      const user = this.authService.currentUser();
      const userId = user && user.role.toUpperCase() !== 'ADMIN' ? user.id : null;
      if (userId === this.activeUserId) {
        return;
      }

      this.activeUserId = userId;
      this.pollSubscription?.unsubscribe();
      this.pollSubscription = undefined;
      this.notifications.set([]);
      this.error.set('');
      if (userId === null) {
        return;
      }

      this.pollSubscription = timer(0, 15_000)
        .pipe(
          switchMap(() => this.fetchNotifications()),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe();
    });
  }

  refresh(): void {
    this.fetchNotifications().subscribe();
  }

  markRead(notification: OrderStatusNotification): void {
    if (notification.read_at !== null) {
      return;
    }

    this.orderService.markOrderNotificationRead(notification.id).subscribe({
      next: ({ read_at }) => {
        this.notifications.update((notifications) => notifications.map((current) =>
          current.id === notification.id ? { ...current, read_at } : current
        ));
        this.error.set('');
      },
      error: (error: unknown) => {
        console.error('Could not mark order notification as read:', error);
        this.error.set('Could not update this notification. Please try again.');
      }
    });
  }

  private fetchNotifications() {
    return this.orderService.getMyOrderNotifications().pipe(
      catchError((error: unknown) => {
        console.error('Could not load order notifications:', error);
        this.error.set('Could not load order updates. Please try again.');
        return EMPTY;
      }),
      tap((notifications) => {
        this.notifications.set(notifications);
        this.error.set('');
      })
    );
  }
}
