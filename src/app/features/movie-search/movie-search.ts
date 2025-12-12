import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../../core/services/movie';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { NotificationService } from '../../shared/utils/notification';
import { MovieList } from '../movie-list/movie-list';
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private movieService: MovieService, private notifier: NotificationService, private cdr: ChangeDetectorRef) {}

  page = 1;
  totalPages = 1;

  search(page: number = 1) {
      if (!this.query.trim()) return;

      this.loading = true;
      this.movies = [];

      this.movieService.searchMovies(this.query, page).subscribe({
        next: (res) => {
          this.movies = res.results;
          this.totalPages = res.total_pages;
          this.page = page;
          if (this.movies.length === 0) {
            this.notifier.showInfo('No se encontraron resultados.');
          }
          this.loading = false;
          this.cdr.detectChanges();
          this.notifier.showSuccess("Películas cargadas correctamente");
        },
        error: (err) => {
          this.loading = false;
          this.cdr.detectChanges();
          this.notifier.showInfo('Error cargando los resultados.');
        }
      });
    }

  nextPage() {
    if (this.page < this.totalPages) {
      this.search(this.page + 1);
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.search(this.page - 1);
    }
  }
}
