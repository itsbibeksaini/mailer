import { Directive, HostListener, Input } from '@angular/core';
import { MailPreviewStore } from 'src/app/components/mail-preview/state/mail-preview-store';

@Directive({
  selector: '[mail-select]'
})
export class MailSelectorDirective {

  @Input('mail-select') selectedMail!: string;
  constructor(private mailPreviewStore: MailPreviewStore) { }

  @HostListener('click') onClick(){
    alert(this.selectedMail)
  }

  

}
