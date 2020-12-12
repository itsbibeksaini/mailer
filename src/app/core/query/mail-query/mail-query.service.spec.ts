import { TestBed } from '@angular/core/testing';

import { MailQueryService } from './mail-query.service';

describe('MailQueryService', () => {
  let service: MailQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
