import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
