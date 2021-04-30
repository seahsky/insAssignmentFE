import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDFD } from '@model/employee-dfd';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employeesDFD: MatTableDataSource<EmployeeDFD> = new MatTableDataSource();
  //   employeesDFD: EmployeeDFD[] = [];
  constructor(private employeeService: EmployeeService) {}

  async ngOnInit(): Promise<void> {
    await this.employeeService.queryEmployees();
    this.employeesDFD = new MatTableDataSource(
      this.employeeService.getDataForDisplay()
    );
  }
}
