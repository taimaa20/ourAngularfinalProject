import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountantRoutingModule } from './accountant-routing.module';
import { AccountantComponent } from './accountant/accountant.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountantComponent
  ],
  imports: [
    CommonModule,
    AccountantRoutingModule,
    SharedModule
  ]
})
export class AccountantModule { }
