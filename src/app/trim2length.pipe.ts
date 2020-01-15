import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim2length'
})
export class Trim2lengthPipe implements PipeTransform {

  // please refer for the use in use-data-service component.
  transform(value: any, len: number): string {
    if(typeof(value) === 'string') {
      if(len > 0) {
        return value.substr(0,len);
      } else {
        return value.substr(0,value.length);
      }
      
    } else {
      return 'Data Type Error'
    }
    
  }

}
