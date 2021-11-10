import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input () number_Of_Users:number|undefined;
  @Input () number_Of_Employees:number|undefined;
  



  
  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    
    
   }

  ngOnInit(): void {
    
    this.GetNumberOfCustomer();
     this.GetNumberOfEmployee()
     this.GetListOfEmployees();
    //this.GetNumberOfAllUser();
    
    
  }
  
  logout()
  {
    localStorage.clear();
    this.router.navigate(['security/login']);
  }

  GetNumberOfCustomer()
  {
    this.spiner.show();

this.homeService.GetNumberOfCustomer().subscribe((res:any)=>{
  this.homeService.data=res;
 
  this.spiner.hide();
  // this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  // this.tostr.error('something want worring!!')
})

 
  }

  GetNumberOfEmployee()
  {
    this.spiner.show();

this.homeService.GetNumberOfEmployee().subscribe((res:any)=>{
  this.homeService.data=res;
 console.log(this.homeService.data)
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
});

this.homeService.GetNumberOfEmployee().subscribe((res:any)=>{
  this.homeService.data=res;
 console.log(this.homeService.data)
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})

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
  GetListOfEmployees(){
    this.homeService.GetListOfEmployees().subscribe((res:any)=>{
      this.homeService.data=res;
     console.log(this.homeService.data)
     
    },err=>{
      console.log("err")
    });
    

  }
  GetNumberOfAllUser()
  {
    this.spiner.show();

this.homeService.GetNumberOfAllUser().subscribe((res:any)=>{
  this.homeService.data=res;
  console.log(this.homeService.data)
  this.spiner.hide();
  // this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  // this.tostr.error('something want worring!!')
})

 
  }
}

