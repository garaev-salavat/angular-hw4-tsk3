import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(values:string[], separator:string) {
    return values.join(separator + ' ');
  }

}
