import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public thumbnail: string,
    public artistId: number
  ) {}
}
@Injectable()
export class SearchService {

  apiRoot = 'https:/ituns.apple.com/search';
  results: SearchItem[];

  constructor(private jsonp: Jsonp) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL).toPromise().then(
        res => {  // success
          this.results = res.json().results.map(
            item => {
              // console.log(item);
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.artworkUrl60,
                item.artistId
              );
            });
          resolve(this.results);
        },
        msg => {  // Error
          reject(msg);
        }
      );
    });
  }
}
