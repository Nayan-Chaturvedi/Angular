import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  // Yeh batata hai ki ye class directive hai
  selector: '[appHighlight]', // Directive ek attribute hai
  standalone: true,
})
export class HighlightDirective {
  public el : ElementRef;
  constructor(el :ElementRef) {
    this.el=el;
  }
  
  @HostBinding('style.backgroundColor') bgColor='red'

  @HostListener('mouseenter')
  changeFontSize()
  {
    console.log('Mouse enter')
    this.el.nativeElement.style.fontSize='100px'
  }

  @HostListener('mouseleave')
  resetSize()
  {
    console.log("Mouse leave")
    this.el.nativeElement.style.fontSize='50px'
  }
}
