import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit{
  reservations: any[] = [];
  
  constructor(private apiService: BookApiService) {}

  ngOnInit(): void {
    this.apiService.getReservations().subscribe((data: any[]) => {
      this.reservations = data;
    });
  }
}
