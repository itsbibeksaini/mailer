import { Directive, HostListener, Input } from '@angular/core';
import { ReadMailContentService } from 'src/app/core/services/read-mail-content/read-mail-content.service';
import { FakeMail } from 'src/app/data-models/fake-mail';

@Directive({
  selector: '[appReadMail]'
})
export class ReadMailDirective {

  @Input('appReadMail') selectedMail: FakeMail;

  constructor(private mailReader:ReadMailContentService) { }

  @HostListener('click') onmouseclick(){
    debugger  

    this.mailReader.setSelectedMail(this.selectedMail);
  }

}
