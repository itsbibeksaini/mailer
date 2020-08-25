import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[option]'
})
export class SidebarOptionSelectorDirective {

  @Input('option') selectedOption: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onmouseclick(){
    debugger
    
  }
  
}
