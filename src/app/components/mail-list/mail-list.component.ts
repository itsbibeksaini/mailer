import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/core/models';
import {filter, switchMap, take} from 'rxjs/operators'
import { MailService } from 'src/app/core/fake-backend/mail/mail.service';
import { MailQueryService } from '../sidebar/state/mail-query/mail-query.service';
import { MailStoreService } from '../sidebar/state/mail-store/mail-store.service';
@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {

  loading:boolean = false
  hasMails:boolean = false
  mails:Mail[] = []

  constructor(private mailQuery: MailQueryService, 
              private mailStore: MailStoreService,
              private mailService: MailService) { }

  ngOnInit(): void {
    // this.mailQuery.getIsLoading().subscribe(res => this.loading = res)
    this.mailQuery.getMails().subscribe(res => {

      this.hasMails = false      
      if(res.selectedFolder == "inbox" && res.inboxMails.length > 0){
        this.mails = res.inboxMails
        this.hasMails = true  
      }
      else if(res.selectedFolder == "sent" && res.sentMails.length > 0){
        this.mails = res.sentMails
        this.hasMails = true  
      }
      if(res.selectedFolder == "draft" && res.draftMails.length > 0){
        this.mails = res.draftMails
        this.hasMails = true  
      }
      if(res.selectedFolder == "trashed" && res.trashedMails.length > 0){
        this.mails = res.trashedMails
        this.hasMails = true  
      }
      
    }, err =>{
      console.log(err);
    })
  }
}
