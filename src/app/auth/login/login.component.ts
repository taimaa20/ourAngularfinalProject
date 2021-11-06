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
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(10)]);

  constructor(private spinner: NgxSpinnerService,private router:Router,public homeservice:HomeService) { }

  ngOnInit(): void {
  }
 
  Login(){
    const usernameValue=this.usernameControl.value;
    const passwordValue = this.passwordControl.value;
    this.spinner.show();
    setTimeout(()=>{
      this.router.navigate([''])
      this.spinner.hide();
    },3000);
  }








 }
