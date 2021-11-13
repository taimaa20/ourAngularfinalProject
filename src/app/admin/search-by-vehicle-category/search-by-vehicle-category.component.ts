import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-search-by-vehicle-category',
  templateUrl: './search-by-vehicle-category.component.html',
  styleUrls: ['./search-by-vehicle-category.component.css']
})
export class SearchByVehicleCategoryComponent implements OnInit {
  formGroup =new FormGroup({
    DateFrom: new FormControl(''),
    DateTo: new FormControl(''),
  })

  formGroupCategory =new FormGroup({
    VehicleCategory: new FormControl(''),
    
  })
  Name:string="undefined";
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
  
  }
  ngOnInit(): void {
  }
  Category:any;
  GetData(){
    this.Category=this.formGroupCategory.value.VehicleCategory
    const data={VehicleCategory:this.Category.toString()}
    console.log(data)
    this.homeService.SearchByVehicleCategory(data);
  }
from:any;
to:any;
  GetData1(){
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
