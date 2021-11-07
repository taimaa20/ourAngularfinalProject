import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountantComponent } from './accountant/accountant.component';

const routes: Routes = [
  {
    path:'accountant',
  component:AccountantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountantRoutingModule { }
