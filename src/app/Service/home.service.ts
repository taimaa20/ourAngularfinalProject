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
data :any =[{}]
  constructor(private http:HttpClient,private spiner :NgxSpinnerService,private toastr:ToastrService,private router:Router) {

    
   }
   GetNumberOfCustomer(){
    return this.http.get('https://localhost:44373/api/Users/NumberOfUsers/')
  }
}
