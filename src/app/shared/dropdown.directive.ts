import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') dropdownOpen: boolean = false;

  constructor() { }

  @HostListener('click')dropdownToggle(){
    console.log("button clicked: "+this.dropdownOpen);
    this.dropdownOpen = !this.dropdownOpen;
    console.log("drop down clicked? "+this.dropdownOpen);
  }

}
