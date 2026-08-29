import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';
import { Signin } from './components/signin/signin';
import { Register } from './components/register/register';
import { ForgotPassword } from './components/forgot-password/forgot-password';

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