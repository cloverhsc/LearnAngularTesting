import {
  Jsonp,
  JsonpModule,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http } from '@angular/http';
import {
  TestBed,
  inject,
  fakeAsync,
  tick } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ JsonpModule ],
      providers: [
        SearchService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
    });
  });

  beforeEach(() => {
    backend = TestBed.get(MockBackend);
    service = TestBed.get(SearchService);
  })

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('search should return SearchItems', fakeAsync(() => {
    let response = {
      "resultCount": 1,
      "results": [{
          "artistId": 78500,
          "artistName": "U2",
          "trackName": "Beautiful Day",
          "artworkUrl60": "image.jpg"
      }]
    }

    // when the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    service.search('U2');
    tick();

    expect(service.results.length).toBe(1);
    expect(service.results[0].artist).toBe('U2');
    expect(service.results[0].name).toBe('Beautiful Day');
    expect(service.results[0].thumbnail).toBe('image.jpg');
    expect(service.results[0].artistId).toEqual(78500);
  }))
});
