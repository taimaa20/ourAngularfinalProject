import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-technecal-report',
  templateUrl: './get-technecal-report.component.html',
  styleUrls: ['./get-technecal-report.component.css']
})
export class GetTechnecalReportComponent implements OnInit {

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
