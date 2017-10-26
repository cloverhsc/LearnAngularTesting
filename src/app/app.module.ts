import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DefaultPipePipe } from './default-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { Login2Component } from './login2/login2.component';
import { HoverFocusDirective } from './hover-focus.directive';
import { Login3Component } from './login3/login3.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPipePipe,
    LoginComponent,
    Login2Component,
    HoverFocusDirective,
    Login3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
