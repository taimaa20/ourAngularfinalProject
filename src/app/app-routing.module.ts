import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { ContactusComponent } from './contactus/contactus.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutusComponent 
  },
    {
    path: 'contactus', 
    component: ContactusComponent
    },
    {
      path:'security',
      loadChildren:()=>AuthModule
    },
    {
      path:'home',
      component:HomePageComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
