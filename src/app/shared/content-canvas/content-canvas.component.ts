import { Component, OnInit } from '@angular/core';
import { ReadMailContentService } from 'src/app/core/services/read-mail-content/read-mail-content.service';
import { FakeMail } from 'src/app/data-models/fake-mail';

@Component({
  selector: 'app-content-canvas',
  templateUrl: './content-canvas.component.html',
  styleUrls: ['./content-canvas.component.scss']
})
export class ContentCanvasComponent implements OnInit {

  selectedMail: FakeMail;
  constructor(private mailContentReader: ReadMailContentService) { 
    mailContentReader.SELECTED_MAIL.subscribe(selectedMail => {
      this.selectedMail = selectedMail
    })
  }

  ngOnInit(): void {
  }

}
