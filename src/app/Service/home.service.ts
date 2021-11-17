import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

selectCourse:any={};
data :any =[{}];
data1 :any =[{}];
card1 :any =[{}];
number_Of_Employees:any =[{}];
number_Of_Users:any =[{}];

total_month_salaries:any=[{}];
total_payment:any=[{}];

users:any =[{}];
vehicle:any =[{}];
financial_report:any =[{}];
Attendance:any =[{}];
fullReport:any =[{}];
payment:any =[{}];
employee_info:any =[{}];
paymentCount:any =[{}];

admin_profile:any=[{}];
TaskJoB:any=[{}];
searchlic:any=[{}];
acc_profile:any=[{}]

technecal_report=[{}];
Insurance:any =[{}];
License:any =[{}];
About:any =[{}];


admin_profile:any=[{}];

searchlicenseexpiry:any=[{}];
message_user:any=[{}];
reportuser:any=[{}];
driverlicense:any=[{}];
engine_capasty:any=[{}];

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
    this.http.post('https://localhost:44373/api/UserRegistration',data).subscribe((res:any)=>{
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

  // GetNumberOfAllUser(){  
  //     return this.http.get('https://localhost:44373/api/Users/NumberOfUsers')
  // }


  Testimonial(data:any)
   {
     this.spiner.show();
     this.http.post('https://localhost:44373/api/Testimonial',data).subscribe(
     (result:any)=>{
     this.toastr.success('Sent');
     this.spiner.hide();
   },
    err=>{
    this.spiner.hide();
    this.toastr.error('Not Send');
 
   })
  }
  GetNumberOfAllUser()
  {
      return this.http.get('https://localhost:44373/api/Users/GetNumberOfAllUser')
}
GetEmployeesSalaries(){
  return this.http.get('https://localhost:44373/api/Users/EmployeesSalaries')
}
GetCountPayment(){
  return this.http.get('https://localhost:44373/api/Payment/GetCountPayment')
}
GetAllVehicles(){
  return this.http.get('https://localhost:44373/api/Vehicle/GetAllVehicles')
}GetAllSalary(){
  return this.http.get('https://localhost:44373/api/salary/GetAllSalary')
}
SearchByVehicleCategory(category:any)

{
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Vehicle/SearchByVehicleCategory',category).subscribe((res:any)=>{
    this.data=res;
    this.toastr.success('SearchByVehicleCategory Success');
    this.router.navigate(['admin/search-by-vehicle-category'])
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Search Error');

  })

}
TotalMonthSalaries(month:any)

{
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Salary/TotalMonthSalaries',month).subscribe((res:any)=>{
    this.total_month_salaries=res;
    console.log(this.total_month_salaries);
    this.toastr.success('TotalMonthSalaries Success');
    // this.router.navigate(['admin/total-month-salaries'])
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Search Error');

  })

}
GetTotalPaymentInDay(day:any)

{
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Payment/GetTotalPaymentInDay',day).subscribe((res:any)=>{
    this.total_payment=res;
    console.log(this.total_payment);
    this.toastr.success('GetTotalPaymentInDay Success');
   // this.router.navigate(['admin/total-payment'])
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Search Error');

  })

}


SearchingForVehiclesLicenseExpiry(dateFromTo:any)

{
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Vehicle/SearchingForVehiclesLicenseExpiry',dateFromTo).subscribe((res:any)=>{
<
    this.searchlic=res;

    this.toastr.success('SearchingForVehiclesLicenseExpiry Success');
    this.router.navigate(['admin/searching-for-vehicles-license-expiry'])
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Search Error');

  })

}


Createattendance(data:any){
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Attendance',data).subscribe((res:any)=>{
    this.toastr.success('Created');
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error(' Not Created');

  })

}
GetAllAttendance(){
  return this.http.get('https://localhost:44373/api/Attendance/GetAllAttendance')
}


GetAllPayments(){
  return this.http.get('https://localhost:44373/api/Payment/GetAllPayments')
}

GetAllLicense(){
  return this.http.get('https://localhost:44373/api/Licensing/GetAllLicensing')
}
GetAllInsurance(){
  return this.http.get('https://localhost:44373/api/Insurance/GetAllInsurance')
}
GetAllAbout(){
  return this.http.get('https://localhost:44373/api/About/GetAllAbout')
}

InsertNewCarLicensing(data:any){
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/NewCarLicensing',data).subscribe((res:any)=>{
    this.toastr.success('Created');
    console.log(this.data);
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error(' Not Created');

  })
}


}
CreateInsurance(data:any){
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Insurance',data).subscribe((res:any)=>{
    this.toastr.success(' Insurance Created');
    this.spiner.hide();


  },err=>{
   this.spiner.hide();
   this.toastr.error('Insurance Not Created');

  })

}

GetUserById(id:number)
    {
      this.spiner.show();
      
      this.http.get('https://localhost:44373/api/Users/GetAllUsersById/'+id).subscribe((res:any)=>{
        
        this.admin_profile=res;
        this.spiner.hide();
        this.router.navigate(['admin/profile']);
        this.toastr.success("Data return success")
      },err=>{
        this.spiner.hide();
        this.toastr.error("Data not return")
      })
    }
    GetUserByIdAcc(id:number)
    {
      this.spiner.show();
      
      this.http.get('https://localhost:44373/api/Users/GetAllUsersById/'+id).subscribe((res:any)=>{
        
        this.acc_profile=res;
        this.spiner.hide();
        this.router.navigate(['accountant/profile']);
        this.toastr.success("Data return success")
      },err=>{
        this.spiner.hide();
        this.toastr.error("Data not return")
      })
    }

    DeleteUserbyID(id:number){
      this.spiner.show();
      debugger
      this.http.delete('https://localhost:44373/api/Users/delete/'+id)
      .subscribe((date:any)=>{
        this.spiner.hide();
        this.toastr.success(' The User Deleted ');
      
      },err=>{
        this.spiner.hide();
        this.toastr.error('Not Deleted');
      
      })
      
      
        }



InsertTaskJob(data:any){
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/TaskJob/InsertTaskJob',data).subscribe((res:any)=>{
    this.toastr.success('Created');
    console.log(this.data);
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error(' Not Created');

  });
}
  InsertLicensing(data:any){
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44373/api/Licensing',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      console.log(this.data);
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Created');
  
    })
  }
  InsertMessage(data:any){
    this.spiner.show();
    debugger
    this.http.post('https://localhost:44373/api/Message/InsertMessage',data).subscribe((res:any)=>{
      this.toastr.success('Created');
      console.log(this.data);
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Created');
  
    })

  }

  UpdateProfile(data:any){
    this.spiner.show();
    debugger
    this.http.put('https://localhost:44373/api/Users',data).subscribe((res:any)=>{
      this.toastr.success('Update Success');
      console.log(this.data);
      this.spiner.hide();
  
    },err=>{
     this.spiner.hide();
     this.toastr.error(' Not Updated');
  
    });
  }

  
GetTaskJobById(id:number)
{
  this.spiner.show();
  
  this.http.get('https://localhost:44373/api/TaskJob/TaskJobById/'+id).subscribe((res:any)=>{
    
    this.TaskJoB=res;
    this.spiner.hide();
    this.router.navigate(['accountant/get-task-job']);
    this.toastr.success("Data return success")
  },err=>{
    this.spiner.hide();
    this.toastr.error("Data not return")
  })
}

VehicleSystemReportBetween(dateFromTo:any)

{
  this.spiner.show();
  debugger
  this.http.post('https://localhost:44373/api/Vehicle/VehicleSystemReportBetween',dateFromTo).subscribe((res:any)=>{
    this.searchlic=res;
    this.toastr.success('VehicleSystemRepor Success');
    this.router.navigate(['admin/vehicle-system-report-between'])
    this.spiner.hide();

  },err=>{
   this.spiner.hide();
   this.toastr.error('Search Error');

  })

}


  GetMessageByUsrId(id:number)
    {
      this.spiner.show();
      
      this.http.get('https://localhost:44373/api/Message/GetMessageByUserId/'+id).subscribe((res:any)=>{
        
        this.message_user=res;
        this.spiner.hide();
        this.router.navigate(['client/get-message']);
        
        this.toastr.success("get-message return success")
        
      },err=>{
        this.spiner.hide();
        this.toastr.error("get-message not return")
      })
    }

    TechnecalReport(id:number)
    {
      this.spiner.show();
      
      this.http.get('https://localhost:44373/api/Vehicle/TechnecalReport/'+id).subscribe((res:any)=>{
        
        this.reportuser=res;
        this.spiner.hide();
        this.router.navigate(['client/get-technecal-report']);
        
        this.toastr.success("get-technecal-report return success")
        
      },err=>{
        this.spiner.hide();
        this.toastr.error("get-technecal-report not return")
      })
    }

    GetDrivingLicense(id:number)
    {
      this.spiner.show();
      
      this.http.get('https://localhost:44373/api/Users/GetDrivingLicense/'+id).subscribe((res:any)=>{
        
        this.driverlicense=res;
        this.spiner.hide();
        this.router.navigate(['client/get-driving-license']);
        
        this.toastr.success("get-driving-license return success")
        
      },err=>{
        this.spiner.hide();
        this.toastr.error("get-driving-license not return")
      })
    }
    TotalCost(EngineCapasty:any)

    {
      this.spiner.show();
      debugger
      this.http.post('https://localhost:44373/api/Licensing/SearchLicensingCost',EngineCapasty).subscribe((res:any)=>{
        this.engine_capasty=res;
        console.log(this.engine_capasty);
        this.toastr.success(' Success');
        this.router.navigate(['client/client'])
        this.spiner.hide();
    
      },err=>{
       this.spiner.hide();
       this.toastr.error('Search Error');
    
      })
    
    }


}
