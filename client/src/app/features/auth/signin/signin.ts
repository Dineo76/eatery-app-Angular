// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../../services/auth-services';

// @Component({
//   selector: 'app-signin',
//   standalone: true,
//   imports: [FormsModule, RouterLink],
//   templateUrl: './signin.html',
//   styleUrl: './signin.css'
// })
// export class Signin {
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit(): void {
//     if (!this.email || !this.password) {
//       this.errorMessage = 'Please enter both email and password.';
//       return;
//     }

//     const success = this.authService.signin(this.email, this.password);

//     if (success) {
//       alert('Welcome back!');
//       this.router.navigate(['/']);
//     } else {
//       this.errorMessage = 'Invalid email or password.';
//     }
//   }
// }
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth-services';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.errorMessage = ''; // reset previous errors

    this.authService.signin(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Invalid email or password.';
      }
    });
  }
}