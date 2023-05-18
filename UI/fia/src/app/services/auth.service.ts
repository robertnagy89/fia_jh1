import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = `${environment.apiUrl}api/user/`;
  private userPayload: any;

  constructor(private http: HttpClient, private router: Router) {
    this.userPayload = this.decodedToken();
  }

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

  signOut() : void {
    localStorage.removeItem("token");
    this.router.navigate(["login"]);
  }

  decodedToken() : any {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }

  getNameFromToken() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.unique_name;
    }
  }

  getRoleFromToken() {
    const userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.role;
    }
  }

  private getUserPayload() {
    if (!this.userPayload) {
      const token = this.getToken();
      if (!token) {
        return null;
      }
      const jwtHelper = new JwtHelperService();
      this.userPayload = jwtHelper.decodeToken(token);
    }
    return this.userPayload;
  }
}
