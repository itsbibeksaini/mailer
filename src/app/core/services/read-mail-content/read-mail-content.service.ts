import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FakeMail } from 'src/app/data-models/fake-mail';
import { FakeDataProviderService } from '../fake-data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class ReadMailContentService {

  private selectedMailBehaviour: BehaviorSubject<FakeMail>;
  private _SELECTED_MAIL:Observable<FakeMail>
  constructor() { 
    this.selectedMailBehaviour = new BehaviorSubject<FakeMail>(null);
    this._SELECTED_MAIL = this.selectedMailBehaviour.asObservable();
  }

  get SELECTED_MAIL(): Observable<FakeMail>{
    return this._SELECTED_MAIL;
  }

  setSelectedMail(mail:FakeMail){
    this.selectedMailBehaviour.next(mail);
  }

}
