import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Cart } from './features/cart/cart'; // Point directly to the file
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLinkActive, 
    RouterLink,
    Navbar, 
    Cart, 
    Footer        
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'eatery-app';
}