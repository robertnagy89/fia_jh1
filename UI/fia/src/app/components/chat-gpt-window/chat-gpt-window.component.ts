import { Component } from '@angular/core';
import { ChatGptConnectionService } from '../../services/chat-gpt-connection.service';

@Component({
  selector: 'app-chatgptwindow',
  templateUrl: './chat-gpt-window.component.html',
  styleUrls: ['./chat-gpt-window.component.css']
})
export class ChatGptWindow {
  response: string = '';
  message: string = '';
  isLoading: boolean = false;

  constructor(private chatService: ChatGptConnectionService) { }

  sendMessage(message: string): void {
    this.isLoading = true;
    this.chatService.sendMessage(message).subscribe(
      (response) => {
        this.response = response.message.content;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }
}
