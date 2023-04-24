import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit {
  @Output() closeChatEmitter = new EventEmitter();
  showChatFlag: boolean = true; // Add a boolean flag for component visibility

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.createChatConnection();
  }

  backToHome() {
    this.closeChatEmitter.emit();
  }

  isChatVisible(): boolean { // Use a different name for the function
    return this.chatService.showChat;
  }

  toggleChat(): void {
    this.showChatFlag = !this.showChatFlag; // Update the value of the boolean flag
  }
}
