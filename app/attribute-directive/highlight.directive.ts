import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private ele: ElementRef, private render2: Renderer2
  ) {
    // this.ele.nativeElement.style.backgroundColor = "red";
    this.render2.setStyle(this.ele.nativeElement, "background-color", "red");
  }
  @HostBinding("style.backgroundColor") bgColor: string = "yellow";
  @HostListener("mouseenter") HoverEvent() {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "blue");
  }
  @HostListener("mouseleave") HoverEvent2() {
    this.render2.setStyle(this.ele.nativeElement, "background-color", "purple");
  }

}
