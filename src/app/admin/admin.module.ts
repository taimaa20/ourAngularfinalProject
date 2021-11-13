import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';

import { DialogComponent } from './dialog/dialog.component';
import { CreatEmployeeComponent } from './creat-employee/creat-employee.component';
import { ChartComponent } from './chart/chart.component';
import { ReportComponent } from './report/report.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';
import { SearchByVehicleCategoryComponent } from './search-by-vehicle-category/search-by-vehicle-category.component';
import { GetAttendanceComponent } from './get-attendance/get-attendance.component';
import { SearchingForVehiclesLicenseExpiryComponent } from './searching-for-vehicles-license-expiry/searching-for-vehicles-license-expiry.component';


@NgModule({
  declarations: [
    AdminComponent,
    CreatEmployeeComponent,
    ChartComponent,
    ReportComponent,
    FinancialReportComponent,
    DialogComponent,
    SearchByVehicleCategoryComponent,
    GetAttendanceComponent,
    SearchingForVehiclesLicenseExpiryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
