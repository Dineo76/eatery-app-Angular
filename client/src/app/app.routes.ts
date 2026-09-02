import { Routes } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { Menu } from './features/menu/menu';
import { About } from './features/home/about/about';
import { Contacts } from './features/contacts/contacts';
import { Signin } from './features/auth/signin/signin';
import { Register } from './features/auth/register/register';
import { ForgotPassword } from './features/auth/forgot-password/forgot-password';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'menu', component: Menu },
  { path: 'about', component: About },
  { path: 'contact', component: Contacts },
  { path: 'signin', component: Signin },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },
  { path: '**', redirectTo: '' }
];