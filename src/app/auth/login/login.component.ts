import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from 'src/app/Service/auth.service';
import { HomeService } from 'src/app/Service/home.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // usernameControl = new FormControl('', [Validators.required]);
  // passwordControl = new FormControl('', [Validators.required,Validators.minLength(10)]);

  constructor(private spinner: NgxSpinnerService,private router:Router, public authService :AuthService) { }

  ngOnInit(): void {
  }
  submitted = false;
  // convenience getter for easy access to form fields
  get f() {
    return this.authService.confirmPassword.value;
  }
  Remember()
  {
    let key=this.authService.usernameControl.value;

    localStorage.setItem(key,this.authService.passwordControl.value);

    let getLocalData=localStorage.getItem(key);
    
  }

  onchang(){
    if (this.authService.passwordControl.value== this.authService.confirmPassword.value) {
    this.authService.confirmPassword.setErrors(null);
    } else{
    this.authService.confirmPassword.setErrors({ mismatch:true});
    } }




 }
