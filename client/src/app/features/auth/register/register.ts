import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../core/services/auth-services';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private authService = inject(AuthService);
  private router = inject(Router);

  fullName = '';
  email = '';
  password = '';
  errorMessage = '';

  onSubmit(): void {
    if (!this.fullName || !this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    this.errorMessage = '';

    this.authService.register(this.fullName, this.email, this.password).subscribe({
      next: () => {
        // Automatically logs in upon registration and navigates to /menu
        this.router.navigate(['/menu']);
      },
      error: (err) => {
        // Catches "Email is already registered" or other backend 400/500 errors
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      }
    });
  }
}