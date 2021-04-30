import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitleCase',
})
export class CustomTitleCasePipe implements PipeTransform {
  transform(value: string): string {
    const result = value.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }
}
