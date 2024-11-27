import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private count = signal(0);

  constructor(){
    effect(()=>{
      console.log(`count`, this.count(), 'doouble Count ', this.doubleCount());
      
    })
  }

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  getCount() {
    return this.count();
  }

  increment() {
    this.count.update((oldValue) => oldValue + 1);
  }
}
