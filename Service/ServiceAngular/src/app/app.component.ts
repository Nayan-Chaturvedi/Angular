import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from './components/joke/joke.component';
import { provideHttpClient } from '@angular/common/http';
import { AComponent } from './components/a/a.component';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JokeComponent, AComponent, B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ServiceAngular';
}
