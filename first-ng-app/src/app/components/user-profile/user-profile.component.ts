import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name: string = 'Nayan Kumar Chaturvedi';
  status = 'single';
  salary: number = 450000;
  isSituation = false;

  names = [
    {
      name: 'Nayan',
      age: 24,
      work: 'privateJob',
    },
    {
      name: 'Aditya',
      age: 65,
      work: 'GovtJob',
    },
    {
      name: 'Puja',
      age: 54,
      work: 'privateJob',
    },
  ];
}
