import { Component, OnInit } from '@angular/core';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mail-preview',
  templateUrl: './mail-preview.component.html',
  styleUrls: ['./mail-preview.component.scss']
})
export class MailPreviewComponent implements OnInit {

  faTrash = faTrash
  constructor() { }

  ngOnInit(): void {
  }

}
