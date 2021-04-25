import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MailPreviewQuery } from 'src/app/components/mail-preview/state/mail-preview-query';
import { MailState } from 'src/app/components/sidebar/state/mail-state';
import { getDraftMails, getInboxMails, getSentMails, MAILS } from '../../fake-data';
import { Mail } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private mailPreviewQuery: MailPreviewQuery) { }

  getMails(): Observable<MailState>{
    return of({
      inboxMails: getInboxMails(),
      sentMails: getSentMails(),
      draftMails: getDraftMails(),
      trashedMails: [],
      isLoaded: true,
      selectedFolder:''
    })
  }

  getSelectedFolder():Observable<Mail[]>{
    return this.mailPreviewQuery.select(state => state.selectedFolder)
  }
}
