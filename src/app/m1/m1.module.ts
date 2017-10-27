import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M1RoutingModule } from './m1-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    M1RoutingModule
  ],
  declarations: [HomeComponent]
})
export class M1Module { }
