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
import { CountryCodePipe } from '../../pipes/country-code.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

function addName(value: string) {
  return 'Hi ' + value;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CountryCodePipe, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  bgColor = 'red';

  @Input({ alias: 'name', transform: addName }) myNaming = '';
  @Input({ transform: numberAttribute, alias: 'salary' }) mySalary!: number;

  phonum = 903922;
}
