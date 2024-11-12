import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  constructor(private http: HttpClient) {}
  
  getJoke() {
    this.http
      .get('https://api.chucknorris.io/jokes/random?category=dev')
      .subscribe((data) => console.log(data));
  }
}
