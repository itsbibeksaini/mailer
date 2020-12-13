import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { getDraftMails, getInboxMails, getSentMails, getTrashedMails, MAILS } from '../../fake-data';
import { Mail } from '../../models';
import { MailState } from '../../state/mail-state';


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
      trashedMails: getTrashedMails(),
      isLoaded: true      
    })
  }
}
