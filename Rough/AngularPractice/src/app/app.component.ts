import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arr = [
    {
      name: 'Vivek',
      status: true,
      salary: 400,
    },
    {
      name: 'Rajesh',
      status: false,
      salary: 900,
    },
    {
      name: 'Akash',
      status: true,
      salary: 100,
    },
  ];

  reciveData(e: User) {
    console.log(e);
    const rajeshArrIndex = this.arr.findIndex((user) => user.name == e.name);
    this.arr[rajeshArrIndex].salary = e.salary;
  }
}
