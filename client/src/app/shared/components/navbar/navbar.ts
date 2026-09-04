// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatBadgeModule } from '@angular/material/badge';
// import { CartService } from '../../services/cart.service';

// interface User {
//   fullName: string;
// }

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterLink,
//     RouterLinkActive,
//     MatToolbarModule,
//     MatButtonModule,
//     MatIconModule,
//     MatBadgeModule
//   ],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css'
// })
// export class Navbar {
//   cartService = inject(CartService);
//   private router = inject(Router);

//   // Example current user state - replace with your AuthService signals/observables
//   currentUser: User | null = null;

//   onLogout(): void {
//     // Add authentication logout logic here (e.g., authService.logout())
//     this.currentUser = null;
//     this.router.navigate(['/signin']);
//   }
// }
import { Component, inject } from '@angular/core';
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
  standalone: true,
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

  onLogout(): void {
    this.authService.logout(); // Clears localStorage & resets currentUser signal
    this.router.navigate(['/signin']);
  }
}