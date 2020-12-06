import { Component, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { faChevronLeft, faChevronRight, faEdit, faFile, faHome, faInbox, faPaperPlane, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

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

  
  
  constructor(private rendrer:Renderer2, private sideBar: ElementRef) { }

  ngOnInit(): void {
  }

}
