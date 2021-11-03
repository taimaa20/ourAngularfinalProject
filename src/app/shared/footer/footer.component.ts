import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  Name:string="undefined";
  email:string="undefined";
  Phone:string="undefined";
  Location:string="undefined";
  currentYear:Date|any = undefined;
  constructor(private router:Router)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    this.email="MyVehicle@Company.com"
    this.Phone="+9627777777777"
    this.Location="PQCR+WHF, Madaba"
    
   }
  ngOnInit(): void {
  }

}
