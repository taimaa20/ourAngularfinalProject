import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { AccountantComponent } from './accountant/accountant.component';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './reports/reports.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceDialogComponent } from './attendance-dialog/attendance-dialog.component';


@NgModule({
  declarations: [
    AccountantComponent,
    ReportsComponent,
    UserInfoComponent,
    EmployeeInfoComponent,
    AttendanceComponent,
    AttendanceDialogComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
    SharedModule
  ]
})
export class AccountantModule { }
