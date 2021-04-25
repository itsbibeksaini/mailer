import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[mail-select]'
})
export class MailSelectorDirective {

  @Input('mail-select') folder!: string;
  constructor() { }

}
