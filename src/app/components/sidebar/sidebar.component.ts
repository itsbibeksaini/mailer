import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faEdit, faFile, faHome, faInbox, faPaperPlane, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MailQueryService } from 'src/app/core/query/mail-query/mail-query.service';
import { MailStoreService } from 'src/app/core/store/mail-store/mail-store.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faEdit = faEdit
  faInbox = faInbox
  faPaperPlane = faPaperPlane
  faFile = faFile
  faTrash = faTrash
  expandColapseIcon = faChevronRight
  
  inboxCounter = 0
  sentCounter = 0
  draftCounter = 0
  trashedCounter = 0

  selectedFolder:string = ''

  constructor(private mailQuery: MailQueryService, private mailStore: MailStoreService) { }

  ngOnInit(): void {
    this.mailQuery.getMails().subscribe(res =>{      
      this.inboxCounter = res.inboxMails.length
      this.sentCounter = res.sentMails.length
      this.draftCounter = res.draftMails.length
      this.trashedCounter = res.trashedMails.length
    })

    this.mailQuery.getMails().subscribe(res => this.selectedFolder = res.selectedFolder)
  }

}
