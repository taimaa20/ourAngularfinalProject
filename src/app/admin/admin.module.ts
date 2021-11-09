import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { CreatEmployeeComponent } from './creat-employee/creat-employee.component';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';


@NgModule({
  declarations: [
    AdminComponent,
    CreatEmployeeComponent,
    ChartComponent,
    ReportComponent,
    FinancialReportComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
