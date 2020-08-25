import { Component, OnInit } from '@angular/core';
import { FakeMail } from 'src/app/data-models/fake-mail';
import { FakeDataProviderService } from 'src/app/core/services/fake-data-provider.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: FakeMail[];

  constructor(private dataProvider: FakeDataProviderService) {     
    debugger
    this.data = dataProvider.getData();
  }

  ngOnInit(): void {
  }

}
