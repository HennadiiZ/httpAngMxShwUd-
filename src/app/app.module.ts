import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


// https://httpangmxshwud-default-rtdb.firebaseio.com/


// 255. Sending a POST Request

// 256. GETting Data

// 257. Using RxJS Operators to Transform Response Data

// 258. Using Types with the HttpClient

// 259. Outputting Posts
