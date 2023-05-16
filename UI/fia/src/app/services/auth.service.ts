import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = `${environment.apiUrl}api/user/`;
  constructor(private http: HttpClient, private router: Router) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  onLogin(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem("token", tokenValue);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  isLoggedIn(): boolean {
    // returns true if truthy
    return !!localStorage.getItem("token");
  }

  signOut() {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }
}
