import { Component,OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  constructor(private apiService: BookApiService) {}

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe((data: any[]) => {
      this.customers = data;
    });
  }
}
