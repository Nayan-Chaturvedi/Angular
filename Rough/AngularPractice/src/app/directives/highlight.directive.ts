import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  public el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }

 

  @HostListener('mouseenter')
  changeFontsize() {
    console.log("Enter mouse")
    this.el.nativeElement.style.fontSize = '50px';
  }

  @HostListener('mouseleave')
  resetFontSize() {
    console.log('Mouse leave');
    this.el.nativeElement.style.fontSize = '30px';
  }
}
