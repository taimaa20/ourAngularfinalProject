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
import { NewCarDialogComponent } from './new-car-dialog/new-car-dialog.component';
import { LicencingComponent } from './licencing/licencing.component';
import { LicenseDialogComponent } from './license-dialog/license-dialog.component';
import { ViewBankcardComponent } from './view-bankcard/view-bankcard.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    
    ClientComponent,
          ProfileComponent,
          GetDrivingLicenseComponent,
          GetTechnecalReportComponent,
          GetMessageComponent,
          AddCarLicenceComponent,
          NewCarDialogComponent,
          LicencingComponent,
          LicenseDialogComponent,
          ViewBankcardComponent,
          PaymentComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
