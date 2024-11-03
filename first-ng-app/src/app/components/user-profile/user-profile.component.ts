import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  name: string = 'Nayan Kumar Chaturvedi';
  status = 'single';
  salary: number = 450000;
  isSituation = false;

  eve = '';
  onChange(event: Event) {
    const eventName = (event.target as HTMLInputElement).value;
    this.eve = eventName;
  }
}
