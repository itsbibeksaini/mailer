import { Directive, HostListener, Input, ElementRef, Renderer2 } from '@angular/core';
import { FakeDataProviderService } from 'src/app/core/services/fake-data-provider.service';

@Directive({
  selector: '[option]'
})
export class SidebarOptionSelectorDirective {

  @Input('option') selectedOption: string;
  constructor(private elementRef: ElementRef, private renderer: Renderer2, private dataProvider: FakeDataProviderService) { }

  @HostListener('click') onmouseclick(){
    debugger
    this.dataProvider.MENU_SELECTED = this.selectedOption;
    this.dataProvider.updateList();    
  }  
}
