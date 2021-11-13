import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AttendanceDialogComponent } from '../attendance-dialog/attendance-dialog.component';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

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
  createAttendance()
  {
    this.dialog.open(AttendanceDialogComponent)
  }
}
