import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../../core/services/auth-services';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  cartService = inject(CartService);
  authService = inject(AuthService); // Inject AuthService
  private router = inject(Router);
  readonly isAdminView = computed(
    () => this.authService.currentUser()?.role?.toUpperCase() === 'ADMIN'
  );

  onLogout(): void {
    this.authService.logout(); // Clears localStorage & resets currentUser signal
    this.router.navigate(['/signin']);
  }
}