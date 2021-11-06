import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input () typeLang:string|undefined;
  @Input () subText:string|undefined;
  @Input () description:string|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
