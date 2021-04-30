import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { TableComponent } from './table/table.component';
import { HomeComponent } from './home.component';
import { TotalCountComponent } from './total-count/total-count.component';
import { InfoComponent } from './info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TableComponent,
    HomeComponent,
    TotalCountComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatSortModule,
    SharedModule,
  ],
})
export class HomeModule {}
