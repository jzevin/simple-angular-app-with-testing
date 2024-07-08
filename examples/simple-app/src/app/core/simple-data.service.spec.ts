import { TestBed } from '@angular/core/testing';

import { SimpleDataService } from './simple-data.service';

describe('SimpleDataService', () => {
  let service: SimpleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
