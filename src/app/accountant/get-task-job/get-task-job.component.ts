import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-task-job',
  templateUrl: './get-task-job.component.html',
  styleUrls: ['./get-task-job.component.css']
})
export class GetTaskJobComponent implements OnInit {

  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router,private dialog:MatDialog)  {
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
