import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  providers:[ServicesService],
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
 constructor(public service:ServicesService){}
}
