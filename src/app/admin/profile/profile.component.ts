
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';
import { UpdateProfileDialogComponent } from '../update-profile-dialog/update-profile-dialog.component';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import * as XLSX from 'xlsx'; 
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { TaskJobDialogComponent } from '../task-job-dialog/task-job-dialog.component';
import { LicenseDialogComponent } from '../license-dialog/license-dialog.component';
import { InsuranceDialogComponent } from '../insurance-dialog/insurance-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Name:string="undefined";
  tuser:any;

  currentYear:Date|any = undefined;

  constructor(private router:Router ,public home:HomeService ,  public tostr:ToastrService,

    private spiner:NgxSpinnerService,private dialog:MatDialog)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
     
   }

  ngOnInit(): void {
    
    
    
    
  }

  showProfile()
  {
    //I will get the user from the local storge 
    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);
    
     const id=parseInt(user.email)
     console.log(id)
    if(id)
    {
       
      this.home.GetUserById(id)
    }
  }

  UpdateAdminProfile()
  {
    this.dialog.open(UpdateProfileDialogComponent)
  }
  

  logout()
  {
    localStorage.clear();
    this.router.navigate(['security/login']);
  }

  
  
  GoToAbout()
  {
    this.router.navigate(['about'])
  }

  GoToContact()
  {
    this.router.navigate(['contactus'])
  }
  
  GoToHome()
  {
    
    this.router.navigate([''])

  }
  createEmployee()
  {
this.dialog.open(DialogComponent)
  }

  // Delete(){
  //   if(this.userId){
     
  //     this.home.DeleteUserbyID(this.userId);
  //     this.tostr.success('Deleted item');
  
  //   }
  //   else {
  //     this.tostr.warning('This item cannot be deleted')
  //   }
  //   window.location.reload();
  // }
  InsertTaskJob()
  {
this.dialog.open(TaskJobDialogComponent)
  }
  InsertLicensing()
  {
this.dialog.open(LicenseDialogComponent)
  }
  createInsurance()
  {
this.dialog.open(InsuranceDialogComponent)
  }
  GoTosearchvehiclecategory()
{
  this.router.navigate(['admin/search-by-vehicle-category'])
}
GoTosearchlicenseexpiry()
{
  this.router.navigate(['admin/searching-for-vehicles-license-expiry'])
}

}
