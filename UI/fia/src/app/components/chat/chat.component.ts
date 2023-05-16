import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit, OnDestroy {
  @Output() closeChatEmitter = new EventEmitter();
  hovered = true;
  defaultAvatar: string = '/assets/images/cavia_wizard1.png';
  selectedUser: string = "";

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.createChatConnection();
  }

  ngOnDestroy() {
    this.chatService.stopChatConnection();
  }

  backToHome() {
    this.closeChatEmitter.emit();
  }

  sendMessage(content: string) {
    this.chatService.sendMessage(content);
  }

  openPrivateChat(toUser: string) {
    this.selectedUser = toUser;
    this.chatService.openPrivateChat(toUser);
  }
}
