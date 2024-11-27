import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipes',
  standalone: true
})
export class NumberPipesPipe implements PipeTransform {

  transform(value: Number, country?:string): string {
    let code='+91-'
    if(country=="USA")
    {
      code='+1-'
    }
   return  code+value;
  }

}
