import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
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

  getLoaded(): Observable<boolean>{
      return this.select(state => state.isLoaded)
  }

  getIsLoading(): Observable<boolean>{
      return this.selectLoading();
  }
}
