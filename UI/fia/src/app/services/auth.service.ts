import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false; // Flag to track login status

  constructor() { }

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
