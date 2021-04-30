import { TypeofExpr } from '@angular/compiler';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { matTooltipAnimations } from '@angular/material/tooltip';
import { Employee } from '@model/employee';
import { EmployeeDFD } from '@model/employee-dfd';
import { EmployeeService } from 'src/app/service/employee.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  //   @Input() dataToDisplay: EmployeeDFD[] = [];
  @Input()
  dataToDisplay: MatTableDataSource<EmployeeDFD> = new MatTableDataSource();
  // this.employeeService.getDataForDisplay()
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  tableCols: string[] = ['fullName', 'dateJoined', 'salary'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private employeeService: EmployeeService) {}

  async ngOnInit(): Promise<void> {
    // await this.employeeService.queryEmployees();
    console.log(this.dataToDisplay.data);
    // console.log(this.employeeService.getDataForDisplay());
    // this.dataToDisplay = new MatTableDataSource(
    //   this.employeeService.getDataForDisplay()
    // );
    console.log(this.dataToDisplay.data);
    this.dataToDisplay.sort = this.sort;
  }

  ngAfterViewInit(): void {
    // this.dataToDisplay.sortingDataAccessor = (
    //   item: EmployeeDFD,
    //   colName: string
    // ) => {
    //   console.log(item);
    //   if (colName === 'Full Name') {
    //     return item.fullName;
    //   }
    //   return item.salary;
    //   //   return item[property as keyof EmployeeDFD];
    // };
    this.dataToDisplay.sort = this.sort;
  }
}
