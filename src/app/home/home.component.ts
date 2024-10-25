import { Component,OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  availableBooks: any[] = [];

  constructor(private apiService: BookApiService) {}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((data: any[]) => {
      this.availableBooks = data.filter(book => book.available);
    });
  }
}
