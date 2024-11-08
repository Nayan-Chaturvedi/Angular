import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent],
  templateUrl: './app.component.html',
  template: `<h1>Nayan Kumar Chaturvedi</h1>`,

  styleUrl: './app.component.css',
})
export class AppComponent {
 
}
