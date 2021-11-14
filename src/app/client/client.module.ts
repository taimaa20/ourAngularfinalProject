import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { SharedModule } from '../shared/shared.module';


import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { GetDrivingLicenseComponent } from './get-driving-license/get-driving-license.component';
import { GetTechnecalReportComponent } from './get-technecal-report/get-technecal-report.component';
import { GetMessageComponent } from './get-message/get-message.component';
import { AddCarLicenceComponent } from './add-car-licence/add-car-licence.component';


@NgModule({
  declarations: [
    
    ClientComponent,
          ProfileComponent,
          GetDrivingLicenseComponent,
          GetTechnecalReportComponent,
          GetMessageComponent,
          AddCarLicenceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
