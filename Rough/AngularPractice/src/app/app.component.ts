import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { HomeComponent } from './components/home/home.component';
import { NumberPipesPipe } from './number-pipes.pipe';
import { B1Component } from './components/b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 name='Nayan Kumar '

 change()
 {
  this.name='Akash tiwari'
 }
}
