import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = signal(0);

  getCount() {
    return this.count();
    // Agar mujhe signal ki value get karni hai to count() paranthis lagane padega
    // count ke baad
  }

  incrementCount() {
    // this.count.set(5);
    // Value directly 5 set ho gai

    // Hum chahte hai ki value ek ek karke increase ho tab update() ka use karege
    // Based on previous value
    this.count.update((oldValue) => oldValue + 1);
  }
}
