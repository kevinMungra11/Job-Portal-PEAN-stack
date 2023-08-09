import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:1111/user';

  constructor(private http: HttpClient) { }

  signUp(user: any): Observable<{}> {
    return this.http.post<{}>(`${this.url}/signup`, user);
  }

  signIn(user: any): Observable<{}> {
    return this.http.post<{}>(`${this.url}/signin`, user);
  }

  signOut(): Observable<{}> {
    localStorage.removeItem('token');
    return this.http.post<{}>(`${this.url}/signout`, {});
  }

  isSignedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isAdmin() {
    if (localStorage.getItem('token')) {
      const token: any = localStorage.getItem('token');
      const decodedToken: any = jwt_decode(token);
      return decodedToken.isAdmin;
    }
    return false;
  }
}