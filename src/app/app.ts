import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export class AppModule {}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movie-finder');
}
