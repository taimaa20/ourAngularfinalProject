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

      description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },
  {
    img:"who we are",
    typeLang:"why MyVhiecle" ,
   
     description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "
  },
  {
    img:"who we are",
    typeLang:"team work value ",
   
    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  },
      {
        img:"who we are",
    typeLang:" our values",

    description:"C# See Sharp is a modern, object-oriented, and type-safe programming language. "  }
  
  ]  
  constructor(private router:Router) { 
    
    
  }

  ngOnInit(): void {
  }


}
