import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextDecorator]'
})
export class TextDecoratorDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.elementRef.nativeElement.style.transform = "scale(1.3)";
    this.elementRef.nativeElement.style.transition = "1s";
    this.elementRef.nativeElement.style.cursor = "pointer";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.elementRef.nativeElement.style.transform = "scale(1)";
    this.elementRef.nativeElement.style.transition = "1s";
  }

}