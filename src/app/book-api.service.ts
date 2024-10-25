import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private apiUrl = 'https://book-api-bx2r.onrender.com';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }

  getReservations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reservations`);
  }

  getCustomers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers`);
  }
}
