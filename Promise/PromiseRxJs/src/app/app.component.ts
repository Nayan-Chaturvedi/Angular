import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ComponentsPromiseComponent } from './components-promise/components-promise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsPromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PromiseRxJs';
}
