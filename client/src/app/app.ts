import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Cart } from './components/cart/cart';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink,Navbar, Cart, Footer        
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'eatery-app';
}