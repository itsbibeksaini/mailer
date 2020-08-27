import { Directive, HostListener, Input } from '@angular/core';
import { ReadMailContentService } from 'src/app/core/services/read-mail-content/read-mail-content.service';
import { FakeMail } from 'src/app/data-models/fake-mail';
import { FakeDataProviderService } from 'src/app/core/services/fake-data-provider.service';

@Directive({
  selector: '[appReadMail]'
})
export class ReadMailDirective {

  @Input('appReadMail') selectedMail: FakeMail;

  constructor(private mailReader:ReadMailContentService, private dataProvider:FakeDataProviderService) { }

  @HostListener('click') onmouseclick(){
    
    this.mailReader.setSelectedMail(this.selectedMail);

    if(!this.selectedMail.IS_READED){
      this.selectedMail.IS_READED = true;
      this.dataProvider.setMailReaded(this.selectedMail);
    }
    

  }

}
