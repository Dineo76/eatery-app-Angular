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
    MatCardModule
  ],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout implements OnInit {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  deliveryForm!: FormGroup;
  paymentForm!: FormGroup;

  // Example cart items (will connect to your Cart Service)
  cartItems = [
    { name: 'Special Kota (Cheese, Egg, Russian)', qty: 2, price: 65 },
    { name: 'Chips & Dip Portion', qty: 1, price: 30 }
  ];

  deliveryFee = 25;

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
  }

  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  }

  get grandTotal(): number {
    return this.subtotal + this.deliveryFee;
  }

  placeOrder(): void {
    if (this.deliveryForm.valid && this.paymentForm.valid) {
      const orderPayload = {
        delivery: this.deliveryForm.value,
        payment: this.paymentForm.value,
        items: this.cartItems,
        total: this.grandTotal
      };

      console.log('Order submitted successfully:', orderPayload);
      // TODO: Connect to Node.js backend POST /api/orders endpoint
      alert('Order placed successfully!');
      this.router.navigate(['/']);
    }
  }
}