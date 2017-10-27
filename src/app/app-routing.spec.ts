import { FormBuilder, Validator, FormControl,
  FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Login3Component } from './login3/login3.component';
import { HomeComponent } from './m1/home/home.component';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, fakeAsync, tick, ComponentFixture, async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { routes } from './app-routing';
import { DebugElement } from '@angular/core';



// describe('Router Root: app', () => {
//   let location: Location;
//   let router: Router;
//   let fixture;
//   let el: DebugElement;

//   beforeEach(async() => {
//     TestBed.configureTestingModule({
//       imports: [ RouterTestingModule.withRoutes(routes),
//       FormsModule, ReactiveFormsModule],
//       declarations: [ HomeComponent, Login3Component]
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     router = TestBed.get(router);
//     location = TestBed.get(Location);
//     fixture = TestBed.createComponent(AppComponent);
//     router.initialNavigation();
//   });

//   it('navigator to ""  show login3 component', fakeAsync(() => {

//   }))
// })
