import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project';
  name='Dana Zeyad';
  salary=100;
  email='DanaKanaan125@gmail.com';

  constructor()
  {
    setTimeout(()=>{
      this.title='Updated Angular Project '
    },3000)
  }


  HandleInputChange(ev:any){
    if(ev.length>15){
      this.name=this.name.substr(0,15);
      alert("you are writting along name");
    }

  }
  clear(){
    this.name='';
    this.email='';
    this.salary=0;
  }
}
