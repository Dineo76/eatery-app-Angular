import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../model/cart';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  cartService = inject(CartService);

  menuItems: MenuItem[] = [
    { id: 1, name: 'Kota number10', description: 'It comes with chips, an egg, cheese, vienna and atchar', price: 140, imageUrl: '/number4.png' },
    { id: 2, name: 'Kota number20', description: 'It comes with chips, an egg, cheese, bacon, lettuce and cucumber', price: 90, imageUrl: '/number20.png' },
    { id: 3, name: 'Kota number11', description: 'It comes with chips, polony and atchar', price: 40, imageUrl: '/number10.png' },
    { id: 4, name: 'Kota number15', description: 'It comes with chips, pork-rib, half done egg', price: 50, imageUrl: '/number15.png' }
  ];

  addToCart(item: MenuItem): void {
    this.cartService.addToCart(item);
  }
}