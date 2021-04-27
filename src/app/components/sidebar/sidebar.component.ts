import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faEdit, faFile, faHome, faInbox, faPaperPlane, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MailQueryService } from './state/mail-query/mail-query.service';
import { MailStoreService } from './state/mail-store/mail-store.service';
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
      this.inboxCounter = res.inboxMails.filter(x => !x.IS_READED).length
      this.sentCounter = res.sentMails.filter(x => !x.IS_READED).length
      this.draftCounter = res.draftMails.filter(x => !x.IS_READED).length
      this.trashedCounter = res.trashedMails.filter(x => !x.IS_READED).length
    })

    this.mailQuery.getMails().subscribe(res => this.selectedFolder = res.selectedFolder)
  }

}
