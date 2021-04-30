import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Employee } from '@model/employee';
import { EmployeeDFD } from '@model/employee-dfd';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'any',
})
export class EmployeeService {
  constructor(private http: HttpService) {}

  apiUrl =
    'https://gist.githubusercontent.com/yousifalraheem/354fb07f27f3c145b78d7a5cc1f0da0b/raw/7561f6827775c6a002a93b6b99b12c3c9454a617/data.json';
  employeeList: Employee[] = [];

  public async queryEmployees(): Promise<void> {
    this.employeeList = await this.http
      .get<Employee[]>(this.apiUrl)
      .toPromise();
  }

  public getEmployees(): Employee[] {
    return this.employeeList;
  }

  public getDataForDisplay(): EmployeeDFD[] {
    const employeesDFD: EmployeeDFD[] = [];
    this.employeeList.map((employee) => {
      employeesDFD.push({
        fullName: `${employee.firstname} ${employee.lastname}`,
        dateJoined: formatDate(
          employee.dateJoined,
          'dd/MM/yyyy HH:mm:ss',
          'en-US'
        ),
        salary: employee.salary,
      });
    });

    return employeesDFD;
  }
}
