import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { Login2Component, User } from './login2.component';


describe('Component: Login2', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Login2Component]
    })
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(Login2Component);

    // get test component from the fixture
    component = fixture.componentInstance;

    component.ngOnInit();
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type="email"]'));
    passwordEl = fixture.debugElement.query(By.css('input[type="password"]'));
  });

  /* it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('Setting enabled to true enables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeFalsy();
  }) */

  it('Entering email and password emits loggedIn event', () => {
    let user: User;
    loginEl.nativeElement.value = 'test@example.com';
    passwordEl.nativeElement.value = '123456';

    component.loggedIn.subscribe((value) => user = value);

    submitEl.triggerEventHandler('click', null);
    expect(user.email).toBe('test@example.com');
    expect(user.password).toBe('123456');
  })
});
