// messages.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Output() contentEmitter = new EventEmitter<string>();
  @Input() messages: Message[] = [];

  content: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.messages;
  }

  sendMessage() {
    if (this.content.trim() !== "") {
      this.contentEmitter.emit(this.content);
    }
  }
}





