import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  count = 0;

  getCount() {
    return this.count;
  }

  incrementCount() {
    return this.count++;
  }
}
