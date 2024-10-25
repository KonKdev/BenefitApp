import { Component, OnInit } from '@angular/core';
import { BookApiService } from '../book-api.service';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  constructor(private apiService: BookApiService){}

  ngOnInit(): void {
    this.apiService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    });
  }

}
