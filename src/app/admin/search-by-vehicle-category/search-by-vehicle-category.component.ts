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
