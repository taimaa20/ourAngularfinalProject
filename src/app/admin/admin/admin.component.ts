import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/Service/home.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admin',
  
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 
  @Input () number_Of_Users:number|undefined;
  @Input () number_Of_Employees:number|undefined; 
  @Input () usersCount:number|undefined;

  @Input () userId:number|undefined;

  
  Name:string="undefined";
  tuser:any;

  currentYear:Date|any = undefined;
  constructor(private router:Router,public homeService : HomeService,
    public tostr:ToastrService,
    private spiner:NgxSpinnerService,private dialog:MatDialog)  {
    this.currentYear = new Date().getFullYear();
    this.Name="MyVehicle Team"
     
   }

  ngOnInit(): void {
    
     this.GetNumberOfCustomer()
      this.GetNumberOfEmployee()

    
     this.GetAllVehicles();
    this.GetNumberOfAllUser();
    
     this.GetListOfEmployees();
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
  
  showProfile()
  {
    //I will get the user from the local storge 
    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);
    
     const id=parseInt(user.email)
     console.log(id)
    if(id)
    {
       
      this.homeService.GetUserById(id)
    }
  }
  createEmployee()
  {
this.dialog.open(DialogComponent)
  }

  Delete(){
    if(this.userId){
     
      this.homeService.DeleteUserbyID(this.userId);
      this.tostr.success('Deleted item');
  
    }
    else {
      this.tostr.warning('This item cannot be deleted')
    }
    window.location.reload();
  }
}

