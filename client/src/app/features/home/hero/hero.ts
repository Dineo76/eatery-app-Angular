import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  private http = inject(HttpClient);
  private router = inject(Router);

  deliveryAddress = '';
  deliveryOption = 'now';
  addressSuggestions: any[] = [];
  private searchSubject = new Subject<string>();

  constructor() {
    // Debounce inputs to limit API hits while typing
    this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        if (!query.trim() || query.length < 3) {
          this.addressSuggestions = [];
          return [];
        }
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=za&limit=5`;
        return this.http.get<any[]>(url);
      })
    ).subscribe(results => {
      this.addressSuggestions = results;
    });
  }

  onAddressInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchSubject.next(val);
  }

  selectAddress(suggestion: any): void {
    this.deliveryAddress = suggestion.display_name;
    this.addressSuggestions = [];
  }

  onFindFood(): void {
    this.router.navigate(['/menu'], {
      queryParams: {
        search: this.deliveryAddress,
        option: this.deliveryOption
      }
    });
  }
}