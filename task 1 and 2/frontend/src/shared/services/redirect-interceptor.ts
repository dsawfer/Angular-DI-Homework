import {Injectable, InjectionToken} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

const redirectUrl = 'http://localhost:3000';

@Injectable()
export class RedirectInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const duplicateRequest = request.clone({ url: redirectUrl });
    return next.handle(duplicateRequest);
  }
}
