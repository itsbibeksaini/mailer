import { Directive, HostListener, Input } from '@angular/core';
import { MailPreviewStore } from 'src/app/components/mail-preview/state/mail-preview-store';
import { MailQueryService } from 'src/app/components/sidebar/state/mail-query/mail-query.service';
import { MailStoreService } from 'src/app/components/sidebar/state/mail-store/mail-store.service';
import { Mail } from '../../models';


@Directive({
  selector: '[folder]'
})
export class FolderSelectorDirective {

  @Input('folder') folder!: string;

  constructor(private mailPreviewStore:MailPreviewStore, private mailQuery:MailQueryService) { }

  @HostListener('click') openFolder(){    
    this.mailQuery.getFolderMails(this.folder).subscribe(res => {
      this.mailPreviewStore.update(state => {
        return{
           selectedMail: new Mail(),
           selectedFolder: res
        }
      })
    }).unsubscribe()
  }

}
