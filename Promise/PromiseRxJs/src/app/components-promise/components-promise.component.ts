import { Component } from '@angular/core';

@Component({
  selector: 'app-components-promise',
  standalone: true,
  imports: [],
  templateUrl: './components-promise.component.html',
  styleUrl: './components-promise.component.css'
})
export class ComponentsPromiseComponent {

  ngOnInit()
  {
    new Promise((resolve, reject)=>
    {
      console.log('start');
      resolve();
    })
    .then(()=>
    {
      throw new Error("Something went wrong")
    })
    .catch(()=>{
      console.log("Do this action 2")
    })
    .then(()=>
    {
      console.log("do this action ")
    })
  }
}
