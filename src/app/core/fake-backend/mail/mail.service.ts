import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MailState } from 'src/app/components/sidebar/state/mail-state';
import { getDraftMails, getInboxMails, getSentMails, MAILS } from '../../fake-data';
import { Mail } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

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
}
