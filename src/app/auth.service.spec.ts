import { async, TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';

class MockAuth extends AuthService {

}

describe('Service: Auth', () => {
  let service: AuthService;

  beforeEach(() => {
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  /* it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from  isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  }); */

  // async
  it('should return true from isAuthenticated when there is a token',
  async(() => {
    localStorage.setItem('token', '1234');
    service.isAuthenticated().then((result) => expect(result).toBeTruthy());
  }));

  it('should return false from isAuthenticated when there is no token',
  async(() => {
    service.isAuthenticated().then((result) => expect(result).toBeFalsy())
  }))


});

/* describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
}); */
