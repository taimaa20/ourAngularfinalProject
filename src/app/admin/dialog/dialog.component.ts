import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Service/home.service';
// import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  formGroup =new FormGroup({
    username: new FormControl('', [Validators.required]),
    password:new FormControl('',[Validators.required]),
    // roleId: new FormControl('',[Validators.required]), 
    fullName: new FormControl('', [Validators.required]),
    userImage:new FormControl('',[Validators.required]),
    gender: new FormControl('', [Validators.required]),   
    age: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    address: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('',[Validators.required]),
    // settingId: new FormControl('',[Validators.required]),
    
  }) 
  
  constructor(private home:HomeService) { }

  ngOnInit(): void {
  }
  userNamedata:any;
  passworddata:any;
  roleIddata:number=3;
  namedata:any;
  imagedata:any;
  genderdata:any;
  agedata:any;
  emaildata:any;
  addressdata:any;
  phonedata:any;
  settingIddata:number=1;
  saveItem(){
    debugger
    this.userNamedata=this.formGroup.value.username;
    this.passworddata=this.formGroup.value.password;
    this.roleIddata=this.roleIddata,
    this.namedata=this.formGroup.value.fullName;
    this.imagedata=this.formGroup.value.userImage;
    this.genderdata=this.formGroup.value.gender;
    this.agedata=this.formGroup.value.age;
    this.emaildata=this.formGroup.value.email;
    this.addressdata=this.formGroup.value.address;
    this.phonedata=this.formGroup.value.phoneNumber;
    this.settingIddata=this.settingIddata;
    const data2={

      username:this.userNamedata.toString(),
      password:this.passworddata.toString(),
      roleId:this.roleIddata,
      fullName:this.namedata.toString(),
      userImage:this.imagedata.toString(),
      gender:Boolean(this.genderdata),
      age: parseInt(this.agedata),
      email: this.emaildata.toString(),
      address: this.addressdata.toString(),
      phoneNumber:parseInt( this.phonedata),
      settingId:this.settingIddata,

      

    }
    console.log(data2)
    this.home.CreateEmployee(data2);
    // window.location.reload();

  }
}
