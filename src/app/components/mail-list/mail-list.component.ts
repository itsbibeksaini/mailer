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

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
    this.mailService.getSelectedFolder().subscribe(res => {
      if(res.length > 0){
        this.hasMails = true
        this.mails = res
      }
      else
        this.hasMails = false
    })
  }
}
