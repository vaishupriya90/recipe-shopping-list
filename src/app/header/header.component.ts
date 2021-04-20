import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Output() navLink = new EventEmitter<string>();
  constructor(){}

  onClick(navLink : string){
    this.navLink.emit(navLink);
  }

}
