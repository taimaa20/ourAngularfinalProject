import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-add-task-job',
  templateUrl: './add-task-job.component.html',
  styleUrls: ['./add-task-job.component.css']
})
export class AddTaskJobComponent implements OnInit {

  Name:string="undefined";
  tuser:any;

  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService)  {
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
