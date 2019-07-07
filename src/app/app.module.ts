import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GroceryCompont } from './app.grocery';
import { FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';
//import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    GroceryCompont
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // HttpModule,
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [GroceryCompont]
})
export class AppModule { }
