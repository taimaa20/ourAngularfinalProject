import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  data :any =[{
    typeLang:"who we are",
      subText:"C#" ,
      description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },
  {
    typeLang:"our polices" ,
     subText:"Angular" ,
     description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "
  },
  {
    typeLang:"team work",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },  {
    typeLang:"Back End",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  }
  
  ]  
  constructor(private router:Router) { 
    
    
  }

  ngOnInit(): void {
  }


}
