import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 
  
  formGroup =new FormGroup({
    paymentAmount: new FormControl('', [Validators.required]),
    paymentDate:new FormControl('',[Validators.required]),
    
   
    
  }) 

  constructor(private home:HomeService) { }

  ngOnInit(): void {
  }
  paydata:any;
  payamount:any;
   user:any=localStorage.getItem('user');
   user1=JSON.parse(this.user);
          
   id=parseInt(this.user1.email)
  
 
  saveItem(){
    debugger
    this.paydata=this.formGroup.value.paymentDate;
    this.payamount=this.formGroup.value.paymentAmount;
    this.id=this.id;
    const data2={

      paymentDate:this.paydata.toString(),
      paymentAmount:parseFloat(this.payamount),
      userId:this.id,
      

    }
    console.log(data2)
    this.home.InsertPayment(data2);
    // window.location.reload();

  }
}