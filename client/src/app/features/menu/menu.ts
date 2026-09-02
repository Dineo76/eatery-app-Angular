import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuItem } from '../../shared/model/cart';
import { CartService } from '../../shared/services/cart.service';

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
    {
      id: 1,
      name: 'Saucy Kota',
      description: 'It comes with chips, an egg, cheese, vienna ,atchar and variety of sauces',
      price: 53,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcBW3suBpefZUGShItRoDF-Li7AuY1sSeXlBhSd-wxA&s=10'
    },
    {
      id: 2,
      name: 'Salad Kota',
      description: 'It comes with chips, an egg, cheese, bacon, lettuce and cucumber',
      price: 55,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAvTfvERYc7EpR6UpprK6FATs4Zm7_JjmqCf1S6OqAw&s=10'
    },
    {
      id: 3,
      name: 'Regular Kota',
      description: 'It comes with chips, polony and atchar',
      price: 40,
      imageUrl: '/number10.png'
    },
    {
      id: 4,
      name: 'Pork-rib Kota',
      description: 'It comes with chips, pork-rib, half done egg',
      price: 60,
      imageUrl: '/number15.png'
    },
    {
      id: 5,
      name: 'Classic Special Kota',
      description: 'A quarter loaf packed with chips, polony, cheese, egg, atchar, and special sauce.',
      price: 45,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ25U88J4gnG0rezCmh2wCDtJ6NtDqO_xpyrsO6NJG2Q&s'
    },
    {
      id: 6,
      name: 'Chips & Russian',
      description: 'Crispy Russian sausage and chips.',
      price: 40,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Ufpf1HeEKImWjpgeJi7lT6MaHnOd4Q6V-9UY5LqBHA&s=10'
    },
    {
      id: 7,
      name: 'Family Feast Combo',
      description: '4 Special Kotas, 3 Large Russian & Chips, plus 2 200ml of Soft Drink.',
      price: 230,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0JcujqhWP5wGu6AdxUfYiZVVjKR1S27bW6eSrwsQt_g&s=10'
    },
    {
      id: 8,
      name: 'Large Chips with four Russians',
      description: 'Freshly cut, seasoned slap chips and cheese grill viennas',
      price: 140,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK5G_znqAA_uzPyzl5K1caXhHkm4kDPTbP1oLgkKpsAg&s=10'
    }
  ];

  addToCart(item: MenuItem): void {
    this.cartService.addToCart(item);
  }
}