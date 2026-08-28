import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { AuthService } from '../../services/auth-services';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
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
  authService = inject(AuthService);
  cartService = inject(CartService);
  private router = inject(Router);

  get currentUser() {
    return this.authService.getCurrentUser();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}