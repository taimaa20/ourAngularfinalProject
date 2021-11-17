import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarLicenceComponent } from './add-car-licence/add-car-licence.component';
import { ClientComponent } from './client/client.component';
import { GetDrivingLicenseComponent } from './get-driving-license/get-driving-license.component';
import { GetMessageComponent } from './get-message/get-message.component';
import { GetTechnecalReportComponent } from './get-technecal-report/get-technecal-report.component';
import { LicencingComponent } from './licencing/licencing.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'client',
     component:ClientComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'get-driving-license',
    component:GetDrivingLicenseComponent
  },
  {
    path:'get-message',
    component:GetMessageComponent
  },
  {
    path:'get-technecal-report',
    component:GetTechnecalReportComponent
  },
  {
    path:'add-car-licence',
    component:AddCarLicenceComponent
  },
  {
    path:'licencing',
    component:LicencingComponent
  },

  { path: '', redirectTo: '/add-car-licence', pathMatch: 'full'},

  { path: '', redirectTo: '/add-car-licence', pathMatch: 'full'},

  { path: '', redirectTo: '/get-technecal-report', pathMatch: 'full'},
  { path: '', redirectTo: '/get-message', pathMatch: 'full'},

  { path: '', redirectTo: '/get-driving-license', pathMatch: 'full'},
  { path: '', redirectTo: '/client', pathMatch: 'full'},
  { path: '', redirectTo: '/profile', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
