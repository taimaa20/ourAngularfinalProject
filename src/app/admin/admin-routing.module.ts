import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChartComponent } from './chart/chart.component';
import { CreatEmployeeComponent } from './creat-employee/creat-employee.component';
import { FinancialReportComponent } from './financial-report/financial-report.component';
import { GetAttendanceComponent } from './get-attendance/get-attendance.component';
import { ReportComponent } from './report/report.component';
import { SearchByVehicleCategoryComponent } from './search-by-vehicle-category/search-by-vehicle-category.component';

export const routes: Routes = [
  {
    path:'admin',
  component:AdminComponent
  },
  {
    path:'creat-employee',
    component:CreatEmployeeComponent
  },
  {
    path:'chart',
    component:ChartComponent
  },
  {
    path:'report',
    component:ReportComponent
  },
  {
    path:'financial-report',
    component:FinancialReportComponent
  },
  {
    path:'search-by-vehicle-category',
    component:SearchByVehicleCategoryComponent
  },
  {
    path:'get-attendance',
    component:GetAttendanceComponent
  },
  
  { path: '', redirectTo: '/get-attendance', pathMatch: 'full'},
  { path: '', redirectTo: '/admin', pathMatch: 'full'},
  { path: '', redirectTo: '/creat-employee', pathMatch: 'full'},
  { path: '', redirectTo: '/chart', pathMatch: 'full'},
  { path: '', redirectTo: '/report', pathMatch: 'full'},
  { path: '', redirectTo: '/financial-report', pathMatch: 'full'},
  { path: '', redirectTo: '/search-by-vehicle-category', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
