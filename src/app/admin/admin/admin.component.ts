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
  @Input () usersCount:number|undefined;

  

  
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
    
     this.GetNumberOfCustomer()
      this.GetNumberOfEmployee()

     this.GetListOfEmployees();
     this.GetAllVehicles();
    this.GetNumberOfAllUser();

    
    
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
  this.homeService.number_Of_Users=res;
 
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
   this.tostr.error('something want worring!!')
})

 
  }

  GetNumberOfEmployee()
  {
    this.spiner.show();

this.homeService.GetNumberOfEmployee().subscribe((res:any)=>{
  this.homeService.number_Of_Employees=res;
 console.log(this.homeService.data)
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
});



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
      this.homeService.users=res;
     console.log(this.homeService.users)
     
    },err=>{
      console.log("err")
    });
    

  }
  GetNumberOfAllUser()
  {

this.homeService.GetNumberOfAllUser().subscribe((res:any)=>{
  this.homeService.card1=res;
  console.log(this.homeService.card1)

  this.tostr.success('Data Retrived !!!')
},err=>{

  this.tostr.error('something want worring!!')
})

 
  }
  GetAllVehicles(){
    this.homeService.GetAllVehicles().subscribe((res:any)=>{
      this.homeService.vehicle=res;
     console.log(this.homeService.vehicle)
     
    },err=>{
      console.log("err")
    });
    

  }
  
}

