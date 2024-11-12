import { CommonModule } from '@angular/common';
import {
  booleanAttribute,
  Component,
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
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name = '';

  constructor() {
    console.log('Constructor call', this.name);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change detect');
  }

  ngOnDestroy(): void {
    console.log('On Destroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit call', this.name);
  }
}
