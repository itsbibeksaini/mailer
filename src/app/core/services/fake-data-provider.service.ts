import { Injectable } from '@angular/core';
import { FakeMail } from 'src/app/data-models/fake-mail';
import { MailContent } from 'src/app/data-models/mail-content';
import { BehaviorSubject, Observable } from 'rxjs';
import * as data from '../../core/fake-data/data';

@Injectable({
  providedIn: 'root'
})
export class FakeDataProviderService {

  fakeDataBehaviour:BehaviorSubject<FakeMail[]>
  public currentData:Observable<FakeMail[]>;
  
  private _menuSelected: string;

  constructor() {
    this.fakeDataBehaviour = new BehaviorSubject<FakeMail[]>(null);
    this.currentData = this.fakeDataBehaviour.asObservable();
  }

  getData(): Observable<FakeMail[]>{
    return this.currentData;
  }

  set MENU_SELECTED(selectedOprion: string){
    this._menuSelected = selectedOprion
  }

  get MENU_SELECTED():string{
    return this._menuSelected;
  }

  updateList(){
    if(this.MENU_SELECTED !== undefined || this.MENU_SELECTED !== ""){
      if(this.MENU_SELECTED == "inbox"){
        this.fakeDataBehaviour.next(data.getInboxData());
      }
      if(this.MENU_SELECTED == "sent"){
        this.fakeDataBehaviour.next(data.getSentData());
      }
      if(this.MENU_SELECTED == "draft"){
        this.fakeDataBehaviour.next(data.getDraftData());
      }
      if(this.MENU_SELECTED == "trash"){
        this.fakeDataBehaviour.next(data.getTrashData());
      }
    }
  }

}
