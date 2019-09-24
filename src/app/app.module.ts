import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TossComponent } from './components/toss/toss.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TossComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {
}
