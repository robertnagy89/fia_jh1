// messages.component.ts
import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [
    { sender: 'John', text: 'Hello!', timestamp: new Date(), avatar: '/assets/images/cavia_wizard1.png' },
    { sender: 'Alice', text: 'Hi there!', timestamp: new Date(), avatar: '/assets/images/tortoise_barbarian1.png' },
    // Add more messages as needed
  ];

  newMessage: string = '';

  constructor() { }

  ngOnInit() {
    // Initialize component
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      // Add logic to send new message and update the messages array
      // For example, you can push the new message to the messages array
      const newMsg: Message = {
        sender: 'You', // Update with the sender of the new message
        text: this.newMessage,
        timestamp: new Date(),
        avatar: '/assets/images/your_avatar.png' // Update with the avatar of the sender
      };
      this.messages.push(newMsg);
      this.newMessage = '';
    }
  }
}





