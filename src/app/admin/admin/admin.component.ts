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
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.GetNumberOfCustomer();
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
  console.log(this.homeService.data.number_Of_Users)
  this.spiner.hide();
  this.tostr.success('Data Retrived !!!')
},err=>{
  this.spiner.hide();
  this.tostr.error('something want worring!!')
})
  }
}
