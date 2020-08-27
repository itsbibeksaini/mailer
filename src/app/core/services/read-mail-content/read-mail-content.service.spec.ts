import { TestBed } from '@angular/core/testing';

import { ReadMailContentService } from './read-mail-content.service';

describe('ReadMailContentService', () => {
  let service: ReadMailContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadMailContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
