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
    Username: new FormControl('', [Validators.required]),
    Password:new FormControl('',[Validators.required]),
    RoleId: new FormControl('',[Validators.required]), 
    FullName: new FormControl('', [Validators.required]),
    UserImage:new FormControl('',[Validators.required]),
    Gender: new FormControl('', [Validators.required]),   
    Age: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required,Validators.email]),
    Address: new FormControl('', [Validators.required]),
    PhoneNumber: new FormControl('',[Validators.required]),
    SettingId: new FormControl('',[Validators.required]),
    
  }) 
  constructor(private home:HomeService) { }

  ngOnInit(): void {
  }
  userNamedata:string|undefined;
  passworddata:string|undefined;
  roleIddata:number|undefined;
  namedata:string|undefined;
  imagedata:string|undefined;
  genderdata:boolean|undefined;
  agedata:number|undefined;
  emaildata:string|undefined;
  addressdata:string|undefined;
  phonedata:number|undefined;
  settingIddata:number|undefined;
  saveItem(){
    debugger
    this.userNamedata=this.formGroup.value.Username;
    this.passworddata=this.formGroup.value.Password;
    this.roleIddata=this.formGroup.value.RoleId;
    this.namedata=this.formGroup.value.FullName;
    this.imagedata=this.formGroup.value.UserImage;
    this.genderdata=this.formGroup.value.Gender;
    this.agedata=this.formGroup.value.Age;
    this.emaildata=this.formGroup.value.Email;
    this.addressdata=this.formGroup.value.Address;
    this.phonedata=this.formGroup.value.PhoneNumber;
    this.settingIddata=this.formGroup.value.SettingId;
    const data2={
      Username:this.userNamedata,
      Password:this.passworddata,
      RoleId:this.roleIddata,
      FullName:this.namedata,
      UserImage:this.imagedata,
      Gender:this.genderdata,
      Age: this.agedata,
      Email: this.emaildata,
      Address: this.addressdata,
      PhoneNumber:this.phonedata,
      SettingId:this.settingIddata,

    }
    console.log(data2)
    this.home.CreateEmployee(data2);
    // window.location.reload();

  }
}
