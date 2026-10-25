import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
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

const deliveryAddressStorageKey = 'deliveryAddress';

function deliveryAddressValidator(control: AbstractControl): ValidationErrors | null {
  const address = typeof control.value === 'string' ? control.value.trim() : '';
  if (!address) {
    return null;
  }

  const addressParts = address.split(',').map((part: string) => part.trim());
  const houseAndStreet = addressParts[0] ?? '';
  const suburb = (addressParts[1] ?? '').replace(/\b\d{4}\b/g, '').trim();
  const hasHouseNumber = /^\d+[a-zA-Z]?(?:\s|$)/.test(houseAndStreet);
  const hasStreetName = houseAndStreet.replace(/^\d+[a-zA-Z]?\s*/, '').trim().length > 0;
  const hasPostalCode = addressParts.slice(1).some((part: string) => /\b\d{4}\b/.test(part));

  return hasHouseNumber && hasStreetName && suburb && hasPostalCode
    ? null
    : { addressFormat: true };
}

function cardExpiryValidator(control: AbstractControl): ValidationErrors | null {
  const expiry = typeof control.value === 'string' ? control.value : '';
  if (!expiry) {
    return null;
  }

  const match = /^(0[1-9]|1[0-2])\/(\d{4})$/.exec(expiry);
  if (!match) {
    return { expiryFormat: true };
  }

  const month = Number(match[1]);
  const year = Number(match[2]);
  if (year < 2026) {
    return { expiryYear: true };
  }

  const now = new Date();
  if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth() + 1)) {
    return { expiryPast: true };
  }

  return null;
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
      fullName: ['', [
        Validators.required,
        Validators.pattern(/^\s*[\p{L}\p{M}]+(?:(?:\s+|['\u2019-])[\p{L}\p{M}]+)*\s*$/u)
      ]],
      phone: ['', [Validators.required, Validators.pattern(/^0\d{9}$/)]],
      address: [sessionStorage.getItem(deliveryAddressStorageKey) ?? '', [
        Validators.required,
        deliveryAddressValidator
      ]],
      notes: ['']
    });

    this.paymentForm = this.fb.group({
      paymentMethod: ['card', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      expiry: ['', [Validators.required, cardExpiryValidator]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
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
        next: (res) => {
          const reference = res.orderId;
          
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