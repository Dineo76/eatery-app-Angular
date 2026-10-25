import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Cart } from './features/cart/cart'; // Point directly to the file
import { Footer } from './shared/components/footer/footer';
import { AuthService } from './core/services/auth-services';
import { OrderNotificationService } from './core/services/order-notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Navbar,
    Cart,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly authService = inject(AuthService);
  private readonly orderNotificationService = inject(OrderNotificationService);
  readonly isAdminView = computed(
    () => this.authService.currentUser()?.role?.toUpperCase() === 'ADMIN'
  );

  title = 'eatery-app';
}