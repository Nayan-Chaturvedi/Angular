import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // jab bhi *ngFor and *nfIf use kar rahe hai tab CommonModule directive ko import karna hai
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';

  users = [
    { name: 'Nayan', isStatus: false, salary: 4500 },
    { name: 'Vikas', isStatus: true, salary: 5500 },
    { name: 'Anmol', isStatus: true, salary: 6500 },
    { name: 'Akash', isStatus: false, salary: 7500 },
  ];
}
