import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-licence',
  templateUrl: './add-car-licence.component.html',
  styleUrls: ['./add-car-licence.component.css']
})
export class AddCarLicenceComponent implements OnInit {

  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router)  {
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
}
