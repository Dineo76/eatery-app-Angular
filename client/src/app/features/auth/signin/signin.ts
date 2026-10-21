import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../core/services/auth-services';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    FormsModule, 
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  email = '';
  password = '';
  errorMessage = '';

  // Controls whether the password field displays text or dots
  hidePassword = true;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.errorMessage = '';

    this.authService.signin(this.email, this.password).subscribe({
      next: (response) => {
        const destination = response.user.role?.toUpperCase() === 'ADMIN' ? '/admin' : '/';
        this.router.navigate([destination]);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Invalid email or password.';
      }
    });
  }
}