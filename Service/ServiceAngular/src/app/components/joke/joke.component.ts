import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css',
})
export class JokeComponent implements OnInit {
  joke = 'loading';
  jService: JokeService;
  constructor(jService: JokeService) {
    this.jService = jService;
  }
  ngOnInit(): void {
    this.getAnotherJoke();
  }
  getAnotherJoke() {
    this.jService.getJoke().subscribe((data: any) => {
      this.joke = data.value;
    });
  }
}
