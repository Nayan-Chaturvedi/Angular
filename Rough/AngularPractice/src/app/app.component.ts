import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = [
    {
      userName: 'ramesh',
      status: 'false',
      salary: 2400,
    },
    {
      userName: 'Vikas',
      status: 'true',
      salary: 5800,
    },
    {
      userName: 'Abhay',
      status: 'false',
      salary: 6500,
    },
  ];
}
