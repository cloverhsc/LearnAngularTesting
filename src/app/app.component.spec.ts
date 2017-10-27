
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { Login2Component } from './login2/login2.component';
import { AuthService } from './auth.service';

/* describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        // Login2Component
      ],
      providers: [AuthService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
}); */

function helloWorld() {
  return 'Hello World';
}

describe('Hello world', () => {

  let expected = '';

  beforeEach(() => {
    expected = 'Hello World';
  });

  afterEach(() => {
    expected = '';
  });

  it('says hello', () => {
    expect(helloWorld())
      .toEqual(expected);
  });
});
