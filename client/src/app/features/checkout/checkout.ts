import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CartService } from '../../shared/services/cart.service';

// Adjust relative path if order.service.ts lives in core or shared:
import { OrderService, OrderPayload } from '../../core/services/OrderService';

interface OrderResponse {
  orderId?: string;
  _id?: string;
  message?: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  public cartService = inject(CartService);
  private orderService = inject(OrderService);

  deliveryForm!: FormGroup;
  paymentForm!: FormGroup;
  deliveryFee = 25;
  isSubmitting = false;

  ngOnInit(): void {
    this.deliveryForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      notes: ['']
    });

    this.paymentForm = this.fb.group({
      paymentMethod: ['card', Validators.required],
      cardNumber: [''],
      expiry: [''],
      cvv: ['']
    });

    this.paymentForm.get('paymentMethod')?.valueChanges.subscribe((method: string) => {
      const cardNum = this.paymentForm.get('cardNumber');
      const expiry = this.paymentForm.get('expiry');
      const cvv = this.paymentForm.get('cvv');

      if (method === 'card') {
        cardNum?.setValidators([Validators.required]);
        expiry?.setValidators([Validators.required]);
        cvv?.setValidators([Validators.required]);
      } else {
        cardNum?.clearValidators();
        expiry?.clearValidators();
        cvv?.clearValidators();
      }

      cardNum?.updateValueAndValidity();
      expiry?.updateValueAndValidity();
      cvv?.updateValueAndValidity();
    });
  }

  get grandTotal(): number {
    return this.cartService.totalAmount() + this.deliveryFee;
  }

  placeOrder(): void {
    if (this.deliveryForm.invalid || this.paymentForm.invalid) {
      return;
    }

    this.isSubmitting = true;

    const payload: OrderPayload = {
      delivery: this.deliveryForm.value,
      payment: {
        paymentMethod: this.paymentForm.value.paymentMethod
      },
      items: this.cartService.cartItems(),
      subtotal: this.cartService.totalAmount(),
      deliveryFee: this.deliveryFee,
      total: this.grandTotal
    };

      this.orderService.placeOrder(payload).subscribe({
        next: (res: OrderResponse) => {
          const reference = res.orderId || res._id || 'SUCCESS';
          
          // 1. Clear cart items
          this.cartService.clearCart();
          
          // 2. Navigate straight to Order Success page with order reference
          this.router.navigate(['/order-success'], { 
            state: { orderId: reference } 
          });
        },
        error: (err: unknown) => {
          console.error('Error placing order:', err);
          alert('Failed to place order. Please try again.');
          this.isSubmitting = false;
        }
      });
      }
  
}