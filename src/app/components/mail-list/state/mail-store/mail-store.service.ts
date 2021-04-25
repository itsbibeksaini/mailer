import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { getInitialState, MailState } from '../../state/mail-state';

@Injectable({
  providedIn: 'root'
})

@StoreConfig({name: "mail"})
export class MailStoreService extends Store<MailState> {

  constructor() { 
    super(getInitialState())
  }
}
