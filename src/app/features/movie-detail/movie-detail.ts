import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css'],
  imports: [CommonModule, LoadingSpinner]
})
export class MovieDetail {
  movie: any;
  loading = true;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieDetail(id).subscribe({
      next: (res) => {
        this.movie = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        alert('Error cargando detalle de la película');
      }
    });
  }
}
