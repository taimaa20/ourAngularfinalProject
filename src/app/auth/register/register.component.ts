import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // formGroup =new FormGroup({
  //   username: new FormControl('', [Validators.required]),
  //   password:new FormControl('',[Validators.required]),
  //   // roleId: new FormControl('',[Validators.required]),
  //   fullName: new FormControl('', [Validators.required]),
  //   userImage:new FormControl('',[Validators.required]),
  //   gender: new FormControl('', [Validators.required]),
  //   age: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required,Validators.email]),
  //   address: new FormControl('', [Validators.required]),
  //   phoneNumber: new FormControl('',[Validators.required]),
  //   // settingId: new FormControl('',[Validators.required]),

  //
  formGroup =new FormGroup({
    fullNameControl: new FormControl('', [Validators.required]),
    UserImageControl:new FormControl('',[Validators.required]),
    GenderControl: new FormControl('', [Validators.required]),
    emailControl:new FormControl('', [Validators.required,Validators.email]),
    AgeControl: new FormControl('', [Validators.required]),
    addressControl: new FormControl('', [Validators.required]),
    phoneNumberControl : new FormControl('',[Validators.required]),
    usernameControl :new FormControl('', [Validators.required]),
  passwordControl : new FormControl('', [Validators.required,Validators.minLength(10)])
})
  constructor(private router:Router,public authService :AuthService) { }

  ngOnInit(): void {
  }
  submit(){
    // console.log(this.registerForm.controls);
  }

}
