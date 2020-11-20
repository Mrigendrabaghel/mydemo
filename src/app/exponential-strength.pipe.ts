import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByName'
})
export class ExponentialStrengthPipe implements PipeTransform {

  transform(input: any[] ,para1, para2) {
     return input.sort( (a,b) => b - a);
    
  }

}
