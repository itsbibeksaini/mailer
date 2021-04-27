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
  constructor(private mailPreviewStore: MailPreviewStore) { }

  @HostListener('click') onClick(){
    
    this.mailPreviewStore.selectMail(this.selectedMail)

  }
  
}
