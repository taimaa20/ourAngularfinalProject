import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
message:string='This is home service!!'
selectCourse:any={};
data :any =[{}];
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) {

    
   }
   GetNumberOfCustomer(){
    return this.http.get('https://localhost:44373/api/Users/NumberOfUsers/')
  }
  GetNumberOfEmployee(){
    return this.http.get('https://localhost:44373/api/Users/NumberOfEmployees/')
  }


  CreateEmployee(data:any){
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44373/api/UserRegistration/',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      this.spiner.hide();
 
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Created');
  
    })
 
  }

  VehicleSystemReport(){
    return this.http.get('https://localhost:44373/api/Vehicle/VehicleSystemReport')
  }
  ObtainFinancialReports(){
    return this.http.get('https://localhost:44373/api/Users/ObtainFinancialReports')
  }
  GetListOfEmployees(){
    return this.http.get('https://localhost:44373/api/Users/GetListOfEmployees')
  }
  GetNumberOfAllUser(){  
      return this.http.get('https://localhost:44373/api/Users/NumberOfUsers')
}

}
