import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MenuItem } from '../../model/cart';
import { CartService } from '../../services/cart';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./menu.html',
  styleUrl: './menu.css',
})
export class Menu {

  cartService = inject(CartService);

  menuItems: MenuItem[] = [
    { id: 1, name: 'Number 4', description: 'It comes with chips, an egg, cheese, vienna and atchar', price: 140, imageUrl: '/number4.png' },
    { id: 2, name: 'Number 20', description: 'It comes with chips, an egg, cheese, bacon, lettuce and cucumber', price: 90, imageUrl: '/number20.png' },
    { id: 3, name: 'Number 10', description: 'It comes with chips, polony and atchar', price: 40, imageUrl: '/number10.png' },
    { id: 4, name: 'Number 15', description: 'It comes with chips, pork-rib, half done egg', price: 50, imageUrl: '/number15.png' }
  ];
}
