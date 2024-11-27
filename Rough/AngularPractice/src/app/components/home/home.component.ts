import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  numberAttribute,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { User } from '../../../models/user';
import { HighlightDirective } from '../../directive/highlight.directive';
import { ServicesService } from '../../services.service';

function formatName(name: string) {
  return 'hi ' + name;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public service:ServicesService){}
  
}
