import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule], // Form module import in important while using ngModel
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Nayan Kumar Chaturvedi';

  // For 1st Approch onChange method require [(ngModel)] approch onChange method is not required 

  onChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }
}
