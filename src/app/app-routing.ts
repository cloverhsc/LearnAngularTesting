import { Login3Component } from './login3/login3.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './m1/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Login3Component },
  { path: 'home', component: HomeComponent},
  { path: 'login3', component: Login3Component },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{}
