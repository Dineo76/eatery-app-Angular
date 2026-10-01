import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderPayload {
  delivery: {
    fullName: string;
    phone: string;
    address: string;
    notes?: string;
  };
  payment: {
    paymentMethod: string;
  };
  items: Array<{
    item: {
      name: string;
      price: number;
    };
    quantity: number;
  }>;
  subtotal: number;
  deliveryFee: number;
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/orders';

  placeOrder(orderData: OrderPayload): Observable<any> {
    return this.http.post(this.apiUrl, orderData);
  }
}