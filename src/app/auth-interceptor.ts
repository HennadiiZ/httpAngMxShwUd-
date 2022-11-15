import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    console.log('request is on its way');
    console.log(req.url);
    // const modifiedRequest = req.clone({url: 'some-new-url'});
    // const modifiedRequest = req.clone({headers: 'some-new-headers'}); // error
    // const modifiedRequest = req.clone({headers: req.headers.append('some-new-headers')}); // error
    // const modifiedRequest = req.clone({params});

    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    // return next.handle(req);
    return next.handle(modifiedRequest);
  }
 }
