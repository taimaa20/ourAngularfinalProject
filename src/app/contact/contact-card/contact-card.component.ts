import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input () name:any|undefined;
 
  @Input () subText:string|undefined;
  @Input () imag:string|undefined;
  @Input () description:string|undefined;
  @Input () typeLang:string|undefined;
  constructor() {
    
   }

  ngOnInit(): void {
  }

  // carddata :any =[{
  //   name:"Hamza Al-Omary",
  //     subText:"Developer" ,
  //    imag:""
  // },
  // {
  //   name:"Qussi Al-Dogham " ,
  //    subText:"Developer" ,
  //    imag:""
  // },
  // {
  //   name:"Back End",
  //   subText:"Developer",
  //   imag:""
  // },
  // {
  //   name:"Back End",
  //   subText:"Developer",
  //   imag:""
  // }]

}
