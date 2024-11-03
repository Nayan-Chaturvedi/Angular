import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name = 'Nayan Kumar chaturvedi';

  onChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }

  users = [
    {
      Name: 'Nayan Kumar Chaturvedi',
      salary: 20000,
      isMarried: false,
    },
    {
      Name: 'Abhay Pratap',
      salary: 25000,
      isMarried: true,
    },
    {
      Name: 'Bikas Gupta',
      salary: 1000,
      isMarried: true,
    },
  ];
}
