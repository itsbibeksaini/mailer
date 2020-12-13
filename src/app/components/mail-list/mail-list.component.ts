import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/core/models';
import { MailStoreService } from 'src/app/core/store/mail-store/mail-store.service';
import {filter, switchMap, take} from 'rxjs/operators'
import { MailService } from 'src/app/core/fake-backend/mail/mail.service';
import { MailQueryService } from 'src/app/core/query/mail-query/mail-query.service';

@Component({
  selector: 'mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit {

  loading:boolean = false
  mails:Mail[] = []

  constructor(private mailQuery: MailQueryService, 
              private mailStore: MailStoreService,
              private mailService: MailService) { }

  ngOnInit(): void {
    // this.mailQuery.getIsLoading().subscribe(res => this.loading = res)
    // this.mailQuery.getMails().subscribe(res => this.mails = res)

    // // load this from api
    // this.mailQuery.getLoaded().pipe(
    //   take(1),
    //   filter(res => !res),
    //   switchMap(() =>{
    //     this.mailStore.setLoading(true)
    //     return this.mailService.getMails() // get data from backend api or fake backend 
    //   }) 
    // ).subscribe(res => {
    //   this.mailStore.update(state => {
    //     return {
          
    //     }
    //   })
    //   this.mailStore.setLoading(false)
    // }, err =>{
    //   console.log(err)
    //   this.mailStore.setLoading(false)
    // })
  }

}
