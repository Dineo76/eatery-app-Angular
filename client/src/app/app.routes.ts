import { Routes } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { Menu } from './features/menu/menu';
import { About } from './features/home/about/about';
import { Contacts } from './features/contacts/contacts';
import { Signin } from './features/auth/signin/signin';
import { Register } from './features/auth/register/register';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';
import { Checkout } from './features/checkout/checkout';
import { OrderSuccess } from './features/order-success/order-success';
import { adminGuard, authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'menu', component: Menu},
  { path: 'about', component: About },
  { path: 'contact', component: Contacts },
  { path: 'signin', component: Signin },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'checkout', component: Checkout, canActivate: [authGuard] },
  { path: 'order-success', component: OrderSuccess },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/user/dashboard/user-dashboard').then((m) => m.UserDashboard)
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./features/admin/dashboard/admin-dashboard').then((m) => m.AdminDashboard)
  },
  { path: '**', redirectTo: '' }
];