import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
  @Input () paymentCount:number|undefined;
  Name:string="undefined";
  
  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService:HomeService ,
    public tostr:ToastrService)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
    
    
   }
  ngOnInit(): void {
    this.GetCountPayment();
    this.GetAllSalary();
    this.GetAllPayments();
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
  GetCountPayment(){
    this.homeService.GetCountPayment().subscribe((res:any)=>{
      this.homeService.paymentCount=res;

      this.tostr.success('Data Retrived !!!')
    },err=>{

       this.tostr.error('something want worring!!')
    });
    

  }
  GetAllSalary(){
    this.homeService.GetAllSalary().subscribe((res:any)=>{
      this.homeService.data1=res;
     console.log(this.homeService.data)
     
    },err=>{
      console.log("err")
    });
    

  }
  GetAllPayments(){ this.homeService.GetAllPayments().subscribe((res:any)=>{
    this.homeService.payment=res;
   console.log(this.homeService.payment)
   
  },err=>{
    console.log("err")
  });
  

  }
}
