import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule } from './about/about.module';
import { AboutusCardComponent } from './about/aboutus-card/aboutus-card.component';
import { AboutusComponent } from './about/aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren:()=>AboutModule
  },
    {
    path: 'contactus', 
    loadChildren:()=>ContactModule
    },
    {
      path:'security',
      loadChildren:()=>AuthModule
    },
    {
      path:'',
      component:HomePageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
