import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { HomeService } from 'src/app/Service/home.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  showLoader=false;
  constructor(private spinner: NgxSpinnerService,private router:Router,public homeservice:HomeService) { }

  ngOnInit(): void {
  }
  submit(){
    const emailcontrol=this.email.value;
    const passwordControl=this.password.value;
    console.log(emailcontrol,passwordControl);
    // this.showLoader=true;
      this.spinner.show();
      this.homeservice.message='you are logged in'
    setTimeout(()=>{
      // this.showLoader=false;
      this.router.navigate(['client'])
      this.spinner.hide();
    },3000);
    
  }
  showMessage = false;
toggleShowMessage() {
this.showMessage = !this.showMessage;
}
goToRegister(){
  this.router.navigate(['security/register']);
}
goTonavbar(){
  this.router.navigate(['aboutus']);
}
Remember()
  {
    let key=this.email.value;

    localStorage.setItem(key,this.password.value);

    let getLocalData=localStorage.getItem(key);
    console.log(getLocalData);

  }
}
