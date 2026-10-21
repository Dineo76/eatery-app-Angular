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

export type OrderStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'READY'
  | 'COMPLETED'
  | 'CANCELLED';

export interface AdminOrder {
  id: number;
  full_name: string;
  phone: string;
  address: string;
  notes: string | null;
  payment_method: string;
  subtotal: number;
  delivery_fee: number;
  total_amount: number;
  status: OrderStatus;
  created_at: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
}

export interface OrderResponse {
  orderId: number;
  message: string;
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/orders';

  placeOrder(orderData: OrderPayload): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(this.apiUrl, orderData);
  }

  getOrders(): Observable<AdminOrder[]> {
    return this.http.get<AdminOrder[]>(this.apiUrl);
  }

  updateOrderStatus(id: number, status: OrderStatus): Observable<{ id: number; status: OrderStatus }> {
    return this.http.patch<{ id: number; status: OrderStatus }>(
      `${this.apiUrl}/${id}/status`,
      { status }
    );
  }
}