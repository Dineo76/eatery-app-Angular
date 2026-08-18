import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Menu } from './components/menu/menu';
import { About } from './components/about/about';
import { Contacts } from './components/contacts/contacts';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'menu', component: Menu },
  { path: 'about', component: About },
  { path: 'contact', component: Contacts },
  { path: '**', redirectTo: '' } 
];
