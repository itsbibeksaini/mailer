import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Mail } from '../../models';
import { MailState } from '../../state/mail-state';
import { MailStoreService } from '../../store/mail-store/mail-store.service';

@Injectable({
  providedIn: 'root'
})
export class MailQueryService extends Query<MailState>{

  constructor(private mailStore: MailStoreService){
    super(mailStore);
  }

  getMails(): Observable<Mail[]>{
    return this.select(state => state.mails)
  }

  getLoaded(): Observable<boolean>{
      return this.select(state => state.isLoaded)
  }

  getIsLoading(): Observable<boolean>{
      return this.selectLoading();
  }
}
