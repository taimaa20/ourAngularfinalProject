import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from '../client/client.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  
    path: 'login',
    component: LoginComponent 
  },
    {
    path: 'register',
     component: RegisterComponent
    },
{
  path:'client',
  loadChildren:()=>ClientModule
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
