import { Jsonp } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';

import { SearchService, SearchItem } from './search.service';

describe('SearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService, Jsonp],
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
