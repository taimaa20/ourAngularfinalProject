import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AccountantComponent } from './accountant/accountant.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ProfileComponent } from './profile/profile.component';
import { GetTaskJobComponent } from './get-task-job/get-task-job.component';
import { AddMessageComponent } from './add-message/add-message.component';

const routes: Routes = [
  {
    path:'accountant',
  component:AccountantComponent
  },
  {
    path:'customer-info',
    component:UserInfoComponent
  },
  {
    path:'report',
    component:ReportsComponent
  },
  {
    path:'employee-info',
    component:EmployeeInfoComponent
  },
  {
    path:'attendance',
    component:AttendanceComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'get-task-job',
    component:GetTaskJobComponent
  },
  {
    path:'add-message',
    component:AddMessageComponent
  },
  { path: '', redirectTo: '/add-message', pathMatch: 'full'},
  { path: '', redirectTo: '/get-task-job', pathMatch: 'full'},
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
  { path: '', redirectTo: '/attendance', pathMatch: 'full'},
  { path: '', redirectTo: '/accountant', pathMatch: 'full'},
  { path: '', redirectTo: '/customer-info', pathMatch: 'full'},
  { path: '', redirectTo: '/report', pathMatch: 'full'},
  { path: '', redirectTo: '/employee-info', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
