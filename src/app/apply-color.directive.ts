import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appApplyColor]'
})
export class ApplyColorDirective {
  @HostBinding('style.color') forecolor = 'blue';
  @HostBinding('style.font-size.em') fontSize = 1;
  @HostBinding('style.border') border = '';
  constructor() { }
  // @HostListener('mouseenter') handleMouseEnter() {
  //   this.forecolor = 'red';
  //   this.fontSize = 2;
  // }
  // @HostListener('mouseleave') handleMouseLeave() {
  //   this.forecolor = 'blue';
  //   this.fontSize = 1;
  // }
  @HostListener('focus') handleFocus() {
    this.border = '4px solid green';
  }
  @HostListener('blur') handleBlur() {
    this.border = '';
  }
}
