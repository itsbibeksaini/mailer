import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MAILS } from '../../fake-data';
import { Mail } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  getMails(): Observable<Mail[]>{
    return of(MAILS)
  }
}
