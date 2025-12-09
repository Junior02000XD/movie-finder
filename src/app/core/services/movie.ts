import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Buscar películas
  searchMovies(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(`${this.baseUrl}/search/movie`, { params });
  }

  // Detalle de película
  getMovieDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${id}`);
  }
}
