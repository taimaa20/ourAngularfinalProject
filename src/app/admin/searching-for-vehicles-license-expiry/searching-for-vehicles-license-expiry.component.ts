import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-searching-for-vehicles-license-expiry',
  templateUrl: './searching-for-vehicles-license-expiry.component.html',
  styleUrls: ['./searching-for-vehicles-license-expiry.component.css']
})
export class SearchingForVehiclesLicenseExpiryComponent implements OnInit {

 
  formGroup =new FormGroup({
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
  })

  
  Name:string="undefined";
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
  
  }
  ngOnInit(): void {
  }
  
from:any;
to:any;
  GetData(){
    this.from=this.formGroup.value.DateFrom;
    this.to=this.formGroup.value.DateTo;
    const data={DateFrom:this.from.toString(),DateTo:this.to.toString()}
    console.log(data)
    this.homeService.SearchingForVehiclesLicenseExpiry(data);
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

}
