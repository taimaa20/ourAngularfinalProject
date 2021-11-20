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

  Role:number=2;
  Setting:number=1;
  gender:boolean=true;
  genderName:string="Male"
  
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

  ngOnInit(): void {}

  saveregister(){
    const User={
    fullName:this.formGroup.value.fullNameControl.toString(),
    userImage:this.formGroup.value.UserImageControl.toString(),
    gender:this.gender,
    age:parseInt(this.formGroup.value.AgeControl),
    email:this.formGroup.value.emailControl.toString(),
    phoneNumber:parseInt(this.formGroup.value.phoneNumberControl),
    address:this.formGroup.value.addressControl.toString(),
    username:this.formGroup.value.usernameControl.toString(),
    password:this.formGroup.value.passwordControl.toString(),
    roleId:this.Role,
    settingId:this.Setting
    }
    this.authService.register(User);
  }
 







  submit(){
    
  }

}
