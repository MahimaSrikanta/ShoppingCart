
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive ({
    selector:'[appDropdown]'
})

export class Dropdowndirective{
  @HostBinding ('class.open') isOpen= false;

  @HostListener('click') toggel(){
    this.isOpen = !this.isOpen;
  }
}