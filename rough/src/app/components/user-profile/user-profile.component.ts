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
    { name: 'Ramesh', isSingle: true, salary: 2000 },
    { name: 'Suresh', isSingle: false, salary: 1000 },
    { name: 'Ajay', isSingle: true, salary: 5000 },
  ];
}
