import { Component, OnInit } from '@angular/core';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Mail } from 'src/app/core/models';
import { MailPreviewQuery } from './state/mail-preview-query';

@Component({
  selector: 'mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.scss']
})
export class MailPreviewComponent implements OnInit {

  faTrash = faTrash
  selectedMail!: Mail
  hasSelectedMail:boolean = false
  constructor(private mailPreviewQuery: MailPreviewQuery) { }

  ngOnInit(): void {
    this.mailPreviewQuery.select(state => {
      let mail = state.selectedMail
      if(mail.ID !== undefined){
        this.selectedMail = mail
        this.hasSelectedMail = true
      }
      else
      this.hasSelectedMail = false
        
    }).subscribe()

  }

}
