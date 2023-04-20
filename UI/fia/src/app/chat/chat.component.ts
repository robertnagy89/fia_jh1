import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent {
  @Output() closeChatEmitter = new EventEmitter();

  constructor(public chatService: ChatService) { }

  backToHome() {
    this.closeChatEmitter.emit();
  }
}
