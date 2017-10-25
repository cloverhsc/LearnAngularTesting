import { TestBed, inject, async } from '@angular/core/testing';

import { AuthOBSService } from './auth-obs.service';

describe('AuthOBSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthOBSService]
    });
  });

  it('should be created', inject([AuthOBSService], (service: AuthOBSService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Observable async AuthOBSService', () => {
  let service: AuthOBSService;

  beforeEach(() => {
    TestBed.configureCompiler({
      providers: [AuthOBSService]
    });
  });

  beforeEach(() => {
    service = new AuthOBSService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should be return true from isAuthenticated when there is a token',
  async() => {
    localStorage.setItem('token', '1234');
    service.isAuthenticated().subscribe(
      (result) => expect(result).toBeTruthy()
    )
  });

  it('should be return false from isAuthenticated when there is no token',
  async() => {
    service.isAuthenticated().subscribe(
      (result) => expect(result).toBeFalsy()
    )
  })
});
