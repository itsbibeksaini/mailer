import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Mail } from 'src/app/core/models';
import { MailState } from '../mail-state';
import { MailStoreService } from '../mail-store/mail-store.service';

@Injectable({
  providedIn: 'root'
})
export class MailQueryService extends Query<MailState>{

  constructor(private mailStore: MailStoreService){
    super(mailStore);
  }

  getMails(): Observable<MailState>{
    return this.select(state => state)
  }

  getFolderMails(folder:string):Observable<Mail[]>{
    
    let mailFolder:Observable<Mail[]> = new Observable<Mail[]>();

    if(folder === "inbox")
      mailFolder = this.select(state => state.inboxMails)
    else if(folder === "sent")
      mailFolder = this.select(state => state.sentMails)
    else if(folder === "draft")
      mailFolder = this.select(state => state.draftMails)
    else if(folder === "trashed")
      mailFolder = this.select(state => state.trashedMails)

    return mailFolder;
  }

  getLoaded(): Observable<boolean>{
      return this.select(state => state.isLoaded)
  }

  getIsLoading(): Observable<boolean>{
      return this.selectLoading();
  }
}
