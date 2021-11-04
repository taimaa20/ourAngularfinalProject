import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  data :any =[{
    img:"who we are",
    typeLang:"who we are",
      subText:"C#" ,
      description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },
  {
    img:"who we are",
    typeLang:"our polices" ,
     subText:"Angular" ,
     description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "
  },
  {
    img:"who we are",
    typeLang:"team work",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },
      {
        img:"who we are",
    typeLang:"Back End",
    subText:"OOP",
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  }
  
  ]  
  constructor(private router:Router) { 
    
    
  }

  ngOnInit(): void {
  }


}
