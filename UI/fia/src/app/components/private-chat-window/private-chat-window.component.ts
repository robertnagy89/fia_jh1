import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-private-chat-window',
  templateUrl: './private-chat-window.component.html',
  styleUrls: ['./private-chat-window.component.css']
})
export class PrivateChatWindowComponent implements OnInit, OnDestroy {
  @Input() toUser = "";
  activeChatWindow: boolean = false;
  privateChatContainer: any;

  constructor(public chatService: ChatService) { }

  ngOnDestroy(): void {
    this.chatService.closePrivateChatMessage(this.toUser);
  }

  ngOnInit(): void {
    this.chatService.windowInitialized = true;
  }

  sendMessage(content: string) {
    this.chatService.sendPrivateMessage(this.toUser, content);
  }

  togglePrivateChat() {
    this.activeChatWindow = !this.activeChatWindow;
  }

  activate(toUser: string) {
    if (this.toUser === toUser) {
      this.activeChatWindow = true;
      return;
    }

    const existingChatWindow = this.chatService.privateChatWindows.find(window => window.toUser === toUser);
    if (existingChatWindow) {
      existingChatWindow.componentRef.instance.activeChatWindow = true;
      this.activeChatWindow = false;
    } else {
      this.chatService.windowInitialized = false;
      this.chatService.getPrivateChatMessages(this.toUser, toUser);
    }
  }
}
