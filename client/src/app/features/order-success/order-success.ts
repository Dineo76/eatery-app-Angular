import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './order-success.html',
  styleUrl: './order-success.css'
})
export class OrderSuccess implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  orderId: string = '';
  estimatedTime: string = '30 - 45 mins';

  ngOnInit(): void {
    // Retrieve orderId passed via query parameters or route state
    const state = history.state;
    if (state && state['orderId']) {
      this.orderId = state['orderId'];
    } else {
      this.orderId = this.route.snapshot.queryParamMap.get('orderId') || 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    }
  }

  goToHome(): void {
    this.router.navigate(['/']);
  }
}
