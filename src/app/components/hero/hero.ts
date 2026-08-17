import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';
import { MenuItem } from '../../model/cart';
import { CartService } from '../../services/cart';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, Cart],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {}
