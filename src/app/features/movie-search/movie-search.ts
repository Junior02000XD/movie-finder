import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { NotificationService } from '../../shared/utils/notification';
import { MovieList } from '../movie-list/movie-list';

@Component({
  standalone: true,
  selector: 'app-movie-search',
  templateUrl: './movie-search.html',
  styleUrls: ['./movie-search.css'],
  imports: [CommonModule, FormsModule, RouterModule, LoadingSpinner, MovieList]
})
export class MovieSearch {
  query = '';
  movies: any[] = [];
  loading = false;

  constructor(private movieService: MovieService, private notifier: NotificationService) {}

  search() {
    if (!this.query.trim()) return;

    this.loading = true;
    this.movies = [];

    this.movieService.searchMovies(this.query).subscribe({
      next: (res) => {
        this.movies = res.results;
        if (this.movies.length === 0) {
          this.notifier.showInfo('No se encontraron resultados.');
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        // El interceptor ya muestra alert con error, aquí opcional
      }
    });
  }
}
