// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterLink } from '@angular/router';
// import { AuthService } from '../../services/auth-services'

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule, RouterLink],
//   templateUrl: './register.html',
//   styleUrl: './register.css'
// })
// export class Register {
//   fullName = '';
//   email = '';
//   password = '';
//   errorMessage = '';

//   constructor(private authService: AuthService, private router: Router) {}

//   onSubmit(): void {
//     if (!this.fullName || !this.email || !this.password) {
//       this.errorMessage = 'Please fill in all fields.';
//       return;
//     }

//     const success = this.authService.register(this.fullName, this.email, this.password);

//     if (success) {
//       alert('Account created successfully! Please sign in.');
//       this.router.navigate(['/signin']);
//     } else {
//       this.errorMessage = 'An account with this email already exists.';
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth-services';

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
  fullName = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.fullName || !this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    const success = this.authService.register(this.fullName, this.email, this.password);

    if (success) {
      alert('Account created successfully! Please sign in.');
      this.router.navigate(['/signin']);
    } else {
      this.errorMessage = 'An account with this email already exists.';
    }
  }
}