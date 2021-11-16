import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-get-attendance',
  templateUrl: './get-attendance.component.html',
  styleUrls: ['./get-attendance.component.css']
})
export class GetAttendanceComponent implements OnInit {

  Name:string="undefined";
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    
    
   }

  ngOnInit(): void {
    this.GetAllAttendance();
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
  GetAllAttendance()
  {
    this.spiner.show();

    this.homeService.GetAllAttendance().subscribe((res:any)=>{
      this.homeService.Attendance=res;
      console.log(this.homeService.Attendance)
      this.spiner.hide();
      this.tostr.success('Data Retrived !!!')
    },err=>{
      this.spiner.hide();
      this.tostr.error('something want worring!!')
    })
    
     
  }

}
