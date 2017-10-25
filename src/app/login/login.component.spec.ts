/* tslint:disable:no-unused-variable */
import { fakeAsync, async, ComponentFixture,
  TestBed, tick, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


/* describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
}); */

/* class MockAuthService extends AuthService {
  authenticated = false;
  isAuthenticated() {
    return this.authenticated;
  }
}

describe('LoginComponent function test', () => {
  let component: LoginComponent;
  let service: MockAuthService;

  beforeEach(() => {
    service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it(`can login return false when user is not autherticated`, () => {
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it(`can login return false when user is not autherticated`, () => {
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  })
}); */


// use spyOn to change return value from AuthService
/* describe('Component: Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from fixtures
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    service = TestBed.get(AuthService);

  });

  it(`canLogin return false when user is not authenticated`, () => {
    spyOn(service, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it(`canLogin return false when user is not authenticated`, () => {
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
}); */

// Testing change Detection
describe('Login component testing change detection', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let el: DebugElement;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    service = TestBed.get(AuthService);

    // get th 'a' element by CSS selector (e.g., by class name)
    el = fixture.debugElement.query(By.css('a'));
  });

  /* it('login button hidden when the user is authenticated', () => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }); */

  // Jasmine way to handle async code (use done)
  it('Button label via Jasmine.done', (done) => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    let spy = spyOn(service, 'isAuthenticated').and
    .returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
      done();
    });
  });

  // Angular async and whenStable
  it('Button label via async() and whenStable()', async(() => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service, 'isAuthenticated').and
    .returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
    component.ngOnInit();
  }));

  // fakeAsync and tick
  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(el.nativeElement.textContent.trim()).toBe('');
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();

    tick();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
  }));
});

// dependency injection
class MockAuthService2 extends AuthService {
  isAuthenticated2() {
    return 'Mocked';
  }
}

describe('Component: Login testing with injection', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedService: AuthService;
  let componentService: AuthService;

  beforeEach(() => {
    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      LoginComponent,
      {set: {providers: [{provide: AuthService, useClass: MockAuthService2}]}}
    );

    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // AuthService provided to the TestBed
    testBedService = TestBed.get(AuthService);

    // AuthService provided by Component, (should return MockAuthService)
    componentService = fixture.debugElement.injector.get(AuthService);
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([AuthService], (injectService: AuthService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('Service injected via component should be and instance of MockAuthService',
  () => {
    expect(componentService instanceof MockAuthService2).toBeTruthy();
  });
});
