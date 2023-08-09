import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {

  }

  intercept(req: any, next: any) {
    // let authService = this.injector.get(AuthService);

    let token = localStorage.getItem('token');
    // console.log(token);
    let tokenizedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    })
    return next.handle(tokenizedReq);
  }
}
