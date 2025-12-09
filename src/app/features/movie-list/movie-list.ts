import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-movie-list',
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css'],
  imports: [CommonModule, RouterModule]
})
export class MovieList {
  @Input() movies: any[] = [];
}
