// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   register(fullName: string, email: string, pass: string): boolean {
//     const existingUser = localStorage.getItem(email);
//     if (existingUser) {
//       return false; // User already exists
//     }

//     const userData = { fullName, email, pass };
//     localStorage.setItem(email, JSON.stringify(userData));
//     return true;
//   }

//   signin(email: string, pass: string): boolean {
//     const savedUser = localStorage.getItem(email);
//     if (!savedUser) {
//       return false; // User not found
//     }

//     const userData = JSON.parse(savedUser);
//     if (userData.pass === pass) {
//       localStorage.setItem('currentUser', JSON.stringify(userData));
//       return true; // Login successful
//     }

//     return false; // Wrong password
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(fullName: string, email: string, pass: string): boolean {
    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      return false; // User already exists
    }

    const userData = { fullName, email, pass };
    localStorage.setItem(email, JSON.stringify(userData));
    return true;
  }

  signin(email: string, pass: string): boolean {
    const savedUser = localStorage.getItem(email);
    if (!savedUser) {
      return false; // User not found
    }

    const userData = JSON.parse(savedUser);
    if (userData.pass === pass) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return true; // Login successful
    }

    return false; // Wrong password
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}