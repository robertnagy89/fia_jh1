import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private chatService: ChatService) { }

  // Use the isLoggedIn() method from the AuthService to check login status
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Delay the execution of createChatConnection() until a valid name is provided
  onLogin(name: string): void {
    if (name) {
      this.chatService.myName = name;
      this.chatService.createChatConnection();
    }
  }
}
