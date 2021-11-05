import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  email:string="undefined";
  Phone:string="undefined";
  Address:string="undefined";
  data :any =[{
    typeLang:"Back End",
      subText:"C#" ,
      description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers. This tour provides an overview of the major components of the language in C# 8 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials."
  },
  {
    typeLang:"Front End" ,
     subText:"Angular" ,
     description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers. This tour provides an overview of the major components of the language in C# 8 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials."
  },
  {
    typeLang:"Back End",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers. This tour provides an overview of the major components of the language in C# 8 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials."
  },
  {
    typeLang:"Back End",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. C# enables developers to build many types of secure and robust applications that run in .NET. C# has its roots in the C family of languages and will be immediately familiar to C, C++, Java, and JavaScript programmers. This tour provides an overview of the major components of the language in C# 8 and earlier. If you want to explore the language through interactive examples, try the introduction to C# tutorials."
  }
  
  
  ]
  constructor() {

    this.email="MyVehicle@Company.com"
    this.Phone="+9627777777777"
    this.Address="PQCR+WHF, Madaba"
   }

  ngOnInit(): void {
  }

}
