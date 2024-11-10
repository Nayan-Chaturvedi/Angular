import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';
  status = 'single';
  salary = 45000;

  buttonDisable = true;

  onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    console.log(value);
  }
}
