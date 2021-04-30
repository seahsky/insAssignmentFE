import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employee.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [EmployeeService],
})
export class SharedServiceModule {}
