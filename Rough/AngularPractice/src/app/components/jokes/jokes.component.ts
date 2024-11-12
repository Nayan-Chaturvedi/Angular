import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css',
})
export class JokesComponent implements OnInit {
  constructor(private jokeservice: JokeService) {}

  ngOnInit(): void {
    this.jokeservice.getJoke();
  }
}
