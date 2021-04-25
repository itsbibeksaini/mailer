import { Component, OnInit } from '@angular/core';
import { filter, switchMap, take } from 'rxjs/operators';
import { MailQueryService } from './components/mail-list/state/mail-query/mail-query.service';
import { MailStoreService } from './components/mail-list/state/mail-store/mail-store.service';
import { MailService } from './core/fake-backend/mail/mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mailer';

  constructor(private mailQuery: MailQueryService, 
              private mailStore: MailStoreService,
              private mailService: MailService) { }
    
  ngOnInit(){
    // this.mailQuery.getIsLoading().subscribe(res => this.loading = res)
    // this.mailQuery.getMails().subscribe(res => this.mails = res)

    // load this from api
    this.mailQuery.getLoaded().pipe(
      take(1),
      filter(res => !res),
      switchMap(() =>{
        this.mailStore.setLoading(true)
        return this.mailService.getMails() // get data from backend api or fake backend 
      }) 
    ).subscribe(res => {
      this.mailStore.update(state => {        
        return {          
          inboxMails: res.inboxMails,
          sentMails: res.sentMails,
          draftMails: res.draftMails,
          trashedMails: res.trashedMails,
          isLoaded: res.isLoaded  
        }
      })
      this.mailStore.setLoading(false)
    }, err =>{
      console.log(err)
      this.mailStore.setLoading(false)
    })
  }
}
