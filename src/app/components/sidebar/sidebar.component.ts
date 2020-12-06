import { Component, OnInit } from '@angular/core';
import { faChevronRight, faEdit, faFile, faHome, faInbox, faPaperPlane, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

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
  faChevronRight = faChevronRight
  constructor() { }

  ngOnInit(): void {
  }

}
