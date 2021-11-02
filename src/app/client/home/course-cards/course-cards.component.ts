import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from 'src/app/Service/home.service';

@Component({
  selector: 'app-course-cards',
  templateUrl: './course-cards.component.html',
  styleUrls: ['./course-cards.component.css']
})
export class CourseCardsComponent implements OnInit {
@Input () typeLang:string|undefined;
@Input () subText:string|undefined;
@Input () description:string|undefined;
@Output () openProfile=new EventEmitter();
  constructor(public homesevice:HomeService) { }

  ngOnInit(): void {
  }
  showProfile(){
    
    this.openProfile.emit();
  }
}
