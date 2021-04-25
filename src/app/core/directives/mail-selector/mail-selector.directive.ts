import { Directive, HostListener, Input } from '@angular/core';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { MailPreviewQuery } from 'src/app/components/mail-preview/state/mail-preview-query';
import { MailPreviewStore } from 'src/app/components/mail-preview/state/mail-preview-store';
import { Mail } from '../../models';

@Directive({
  selector: '[mail-select]'
})
export class MailSelectorDirective {

  @Input('mail-select') selectedMail!: string;
  constructor(private mailPreviewStore: MailPreviewStore, private mailPreviewQuery: MailPreviewQuery) { }

  @HostListener('click') onClick(){
    this.mailPreviewQuery.select(state => {
      let mail = state.selectedFolder.find(x => x.ID === this.selectedMail)

      if(mail !== undefined)
        this.mailPreviewStore.update({selectedMail: mail})
      
    }).subscribe().unsubscribe()
  }
  
}
