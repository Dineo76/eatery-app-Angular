import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  id: number;
  full_name: string;
  email: string;
  role: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/auth';

  // Holds reactive state for current logged-in user
  currentUser = signal<User | null>(this.getStoredUser());

  // POST /api/auth/register
  register(full_name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
      full_name,
      email,
      password
    }).pipe(
      tap((res) => this.handleAuthSuccess(res))
    );
  }

  // POST /api/auth/login
  signin(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap((res) => this.handleAuthSuccess(res))
    );
  }

  getCurrentUser(): User | null {
    return this.currentUser();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUser.set(null);
  }

  private handleAuthSuccess(response: AuthResponse): void {
    localStorage.setItem('token', response.token);
    localStorage.setItem('currentUser', JSON.stringify(response.user));
    this.currentUser.set(response.user);
  }

  private getStoredUser(): User | null {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('currentUser');

    if (!token || !userStr) {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      return null;
    }

    try {
      return JSON.parse(userStr);
    } catch {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      return null;
    }
  }
}