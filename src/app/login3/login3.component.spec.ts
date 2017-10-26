import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators,
  ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

import { Login3Component } from './login3.component';

describe('Login3Component', () => {
  let component: Login3Component;
  let fixture: ComponentFixture<Login3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Login3Component ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

describe('Component Login3', () => {
  let component: Login3Component;
  let fixture: ComponentFixture<Login3Component>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [Login3Component]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Login3Component);

    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.form.controls['email'];
    errors = email.errors || {};
    console.log(errors);
    expect(email.valid).toBeFalsy();
    expect(errors['required']).toBeTruthy();

    email.setValue('test');
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('12345678');
    expect(component.form.valid).toBeTruthy();

    let user: User;
    // Subscribe to the Observable and store the user in a local variable.
    component.loggedIn.subscribe((value) => user = value);

    // Trigger the login function
    component.login();

    // Now we can check to make sure the emitted value is correct
    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('12345678');
  })

});
