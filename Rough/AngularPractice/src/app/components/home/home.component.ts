import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';
  status = 'single';
  salary = 45000;

  buttonDisable = true;
  value = 'Nayan Kumar Cahturvedi';

  onChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }
}
