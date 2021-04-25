import { Directive, HostListener, Input } from '@angular/core';
import { MailStoreService } from 'src/app/components/mail-list/state/mail-store/mail-store.service';


@Directive({
  selector: '[folder]'
})
export class FolderSelectorDirective {

  @Input('folder') folder!: string;

  constructor(private mailStore:MailStoreService) { }

  @HostListener('click') openFolder(){    
    this.mailStore.update(state => {
      return {
        selectedFolder: this.folder
      }
    })
  }

}
