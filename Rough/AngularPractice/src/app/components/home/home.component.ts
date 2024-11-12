import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  Output,
  SimpleChanges,
  ViewChild,
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
export class HomeComponent implements AfterViewInit {
  @Input() name = '';

  @ViewChild('myHeading') heading?: ElementRef;

  ngAfterViewInit(): void {
    console.log('After view Init', this.heading?.nativeElement.textContent);
  }
}
