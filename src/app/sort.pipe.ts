import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(employees: Array<Employee>, column?: string, reverse?: boolean): Array<Employee> {

       if ( column === 'firstName') {
        employees.sort((e1, e2) => e1.firstName.localeCompare(e2.firstName));
      } 
     else if ( column === 'lastName') {
        employees.sort((e1, e2) => e1.lastName.localeCompare(e2.lastName));
      } 
      else if ( column === 'emailId') {
        employees.sort((e1, e2) => e1.emailId.localeCompare(e2.emailId));
      }

    else if (reverse) {
      employees.reverse();
    }
    return employees;
  }

}
