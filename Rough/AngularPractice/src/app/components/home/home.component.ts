import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'Rajesh';
  @Output() myEvent = new EventEmitter<User>();
  sendData() {
    this.myEvent.emit({ name: this.name, salary: 24000 });
  }
}
