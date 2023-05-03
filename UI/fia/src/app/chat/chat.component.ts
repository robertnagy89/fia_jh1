import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit, OnDestroy {
  @Output() closeChatEmitter = new EventEmitter();
  showChatFlag: boolean = false; // Add a boolean flag for component visibility
  hovered = true;
  defaultAvatar: string = '/assets/images/cavia_wizard1.png';

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.createChatConnection();
  }

  onMouseLeave() {
    setTimeout(() => {
      this.hovered = false;
    }, 1200);
  }

  ngOnDestroy() {
    this.chatService.stopChatConnection();
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

  sendMessage(content: string) {
    this.chatService.sendMessage(content);
  }
}
