import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AccountantComponent } from './accountant/accountant.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

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
