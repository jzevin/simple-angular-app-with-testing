import { TestBed } from '@angular/core/testing';

import { SimpleDataService } from './simple-data.service';
import { HttpClient } from '@angular/common/http';

describe('SimpleDataService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: SimpleDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SimpleDataService]
    });
    service =  new SimpleDataService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
