import { Component } from '@angular/core';
import { CounterService } from '../../service/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
})
export class AComponent {
 
  constructor(public counterService:CounterService)
  {
    
  }
}