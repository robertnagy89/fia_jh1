// messages.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  @Input() messages: Message[] = [];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.messages;
  }
}





