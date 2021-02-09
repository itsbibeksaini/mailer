import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[folder]'
})
export class FolderSelectorDirective {

  @Input('folder') folder!: string;

  constructor() { }

  @HostListener('click') openFolder(){
    this.folder
    debugger
  }

}
