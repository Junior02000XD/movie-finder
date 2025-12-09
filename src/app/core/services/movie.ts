import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Buscar películas
  searchMovies(query: string, page: number = 1): Observable<any> {
    const params = new HttpParams()
      .set('query', query)
      .set('page', page.toString())
      .set('api_key', environment.apiReadToken); // <-- aquí

    return this.http.get(`${this.baseUrl}/search/movie`, { params });
  }

  // Detalle de película
  getMovieDetail(id: string): Observable<any> {
    const params = new HttpParams()
      .set('api_key', environment.apiReadToken); // <-- aquí

    return this.http.get(`${this.baseUrl}/movie/${id}`, { params });
  }
}
