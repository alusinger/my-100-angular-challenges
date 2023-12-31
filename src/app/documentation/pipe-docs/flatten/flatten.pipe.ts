import { Pipe, PipeTransform } from '@angular/core';

/**
 * Flatten pipe
 * Pure Property
 * 
 */

@Pipe({
  name: 'flatten'
})
export class FlattenPipe implements PipeTransform {

  public transform(values: any[]): any[] {
    return this.flattenArray(values);
  }

  private flattenArray(arr: any[]): any[] {

    const result: any[] = [];
    arr.forEach((value) => {
      if (Array.isArray(value)) {
        result.push(...this.flattenArray(value));
      } else {
        result.push(value);
      }
    })
    return result;

    //return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(this.flattenArray(val)) : acc.concat(val), []);
  }





}


