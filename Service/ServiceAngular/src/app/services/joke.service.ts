import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getJoke() { // Ye obserable return karege
    return this.http.get(
      'https://api.chucknorris.io/jokes/random?category=animal'
    );
  }
}
