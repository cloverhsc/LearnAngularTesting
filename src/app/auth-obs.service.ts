import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthOBSService {

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    return Observable.create((observer) => {
      observer.next(!!localStorage.getItem('token'));
    })
  }

}
