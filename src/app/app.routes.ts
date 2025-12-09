import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearch } from './features/movie-search/movie-search';
import { MovieDetail } from './features/movie-detail/movie-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: MovieSearch },
  { path: 'movie/:id', component: MovieDetail },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
