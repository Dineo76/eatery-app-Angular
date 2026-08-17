import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Menu } from './components/menu/menu';
import { Contacts} from './components/contacts/contacts';
import { Footer } from './components/footer/footer';
import { Cart } from './components/cart/cart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, About, Menu, Contacts, Footer, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eatery-app');
}
