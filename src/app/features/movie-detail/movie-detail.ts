import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../core/services/movie';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { NotificationService } from '../../shared/utils/notification';

@Component({
  standalone: true,
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css'],
  imports: [CommonModule, LoadingSpinner]
})
export class MovieDetail implements OnInit {
  movie: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private notifier: NotificationService
  ) {}

  ngOnInit(): void {
    // Cada vez que cambia el ID en la ruta, recarga la película
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loadMovie(id);
    });
  }

  loadMovie(id: string | null) {
    if (!id) return;

    this.loading = true; // <-- Aquí activas el spinner

    this.movieService.getMovieDetail(id).subscribe({
      next: (data) => {
        this.movie = data;
        this.loading = false; // <-- Aquí desactivas el spinner
      },
      error: (err) => {
        console.error(err);
        this.loading = false; // <-- También desactivas spinner si hay error
        this.notifier.showError('Error cargando detalle de la película');
      }
    });
  }
}
