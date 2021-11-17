import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';
import { NewCarDialogComponent } from '../new-car-dialog/new-car-dialog.component';

@Component({
  selector: 'app-add-car-licence',
  templateUrl: './add-car-licence.component.html',
  styleUrls: ['./add-car-licence.component.css'] 
})
export class AddCarLicenceComponent implements OnInit {

  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService,private dialog:MatDialog)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    
    
   }
  ngOnInit(): void {
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
  showMessage()
  {
    //I will get the user from the local storge 
    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);
    
     const id=parseInt(user.email)
     console.log(id)
    if(id)
    {
       
      this.homeService.GetMessageByUsrId(id)
    }
  }

  TechnecalReportUser()
  {
    //I will get the user from the local storge 
    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);
    
     const id=parseInt(user.email)
     console.log(id)
    if(id)
    {
       
      this.homeService.TechnecalReport(id)
    }

  }

  DrivingLicense()
  {
    //I will get the user from the local storge 
    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);
    
     const id=parseInt(user.email)
     console.log(id)
    if(id)
    {
       
      this.homeService.GetDrivingLicense(id)
    }
  }
  InsertNewCarLicensing()
  {
this.dialog.open(NewCarDialogComponent)
  }

}
