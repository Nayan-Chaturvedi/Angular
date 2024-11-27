import { Component } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-b2',
  standalone: true,
  imports: [],
  providers:[ServicesService],
  templateUrl: './b2.component.html',
  styleUrl: './b2.component.css',
})
export class B2Component {
  constructor(public service: ServicesService) {}
}
