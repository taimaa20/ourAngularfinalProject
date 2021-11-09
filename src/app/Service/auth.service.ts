import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './home.service';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private spinner: NgxSpinnerService,private router:Router,public homeService:HomeService,private http:HttpClient) { }
  fullNameControl= new FormControl('', [Validators.required]);
  UserImageControl=new FormControl('',[Validators.required]);
  GenderControl= new FormControl('', [Validators.required]);
  emailControl= new FormControl('', [Validators.required,Validators.email]);
  AgeControl= new FormControl('', [Validators.required]);
  addressControl= new FormControl('', [Validators.required]);
  phoneNumberControl = new FormControl('',[Validators.required]);
  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(10)]);

  submit(){

    var responce1:any;
    var body={
      Username:this.usernameControl.value.toString(),
      Password:this.passwordControl.value.toString()
    };
    const headerDict={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDict)
    }
    console.log(body);
       this.spinner.show();
      debugger
      this.http.post('https://localhost:44373/api/Jwt',body,requestOptions).subscribe((res:any)=>{
        //  this.spinner.show();
        this.spinner.hide()
        responce1=res;
        const responce={
          token:responce1.toString()};
          localStorage.setItem('token',responce.token);
          let data:any=jwtDecode(responce.token);//username: rolename

          //var str=JSON.stringify({...data});
       localStorage.setItem('user',JSON.stringify({...data}));

         if(data.role=='Admin'){
           this.router.navigate(['admin/admin']);
         }
         else if(data.role=='User'){
           this.router.navigate(['security/client']);
         }
         else if(data.role=='Employee')
         {
           this.router.navigate(['accountant/accountant']);
         }
        })
        this.spinner.hide();
    }


}
