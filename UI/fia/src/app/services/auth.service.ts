import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false; // Flag to track login status

  private baseUrl: string = `${environment.apiUrl}api/user/`;
  constructor(private http: HttpClient) { }

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}register`, userObj);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  // Simulate login
  onLogin(): void {
    this.loggedIn = true;
  }

  // Simulate logout
  onLogout(): void {
    this.loggedIn = false;
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
