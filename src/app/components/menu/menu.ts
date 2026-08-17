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
    { id: 1, name: 'Number 4', description: 'It comes with chips, an egg, cheese, vienna and atchar', price: 140, imageUrl: 'https://www.expressoshow.com/wp-content/uploads/2024/09/kotaWebsite-Dimension-1024x512.png' },
    { id: 2, name: 'Number 20', description: 'It comes with chips, an egg, cheese, bacon, lettuce and cucumber', price: 90, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOu6X3IhIVMsgvdZsaQME9TgEnDbhOVpvknlX5mSPxYXB_xsoVn0zYW0&s=10' },
    { id: 3, name: 'Number 10', description: 'It comes with chips, polony and atchar', price: 40, imageUrl: 'https://www.astralchicken.com/wp-content/uploads/2025/09/Kota-with-polony.jpg' },
    { id: 4, name: 'Number 15', description: 'It comes with chips, pork-rib, half done egg', price: 50, imageUrl: 'https://sapork.co.za/wp-content/uploads/2024/11/Pork-Rib-Kota-7.jpeg' }
  ];
}
