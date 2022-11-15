import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth-interceptor';
import { LoggingInterceptor } from './logging.interceptor';

const INTERCEPTORS = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: AuthInterceptorService,
  //     multi: true
  //   },
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: LoggingInterceptor,
  //     multi: true
  //   }
  // ],
  providers: [INTERCEPTORS],
  bootstrap: [AppComponent]
})
export class AppModule {}


// https://httpangmxshwud-default-rtdb.firebaseio.com/


// 255. Sending a POST Request

// 256. GETting Data

// 257. Using RxJS Operators to Transform Response Data

// 258. Using Types with the HttpClient

// 259. Outputting Posts

// 260. Showing a Loading Indicator

// 261. Using a Service for Http Requests

// 262. Services & Components Working Together

// 263. Sending a DELETE Request

// 264. Handling Errors

// 265. Using Subjects for Error Handling

// 266. Using the catchError Operator

// 267. Error Handling & UX

// 268. Setting Headers

// 269. Adding Query Params

// 270. Observing Different Types of Responses

// 271. Changing the Response Body Type

// 272. Introducing Interceptors

// 273. Manipulating Request Objects

// 274. Response Interceptors

// 275. Multiple Interceptors
