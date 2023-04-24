// messages.component.ts
import { Component } from '@angular/core';

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
  avatar: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  messages: Message[] = [
    {
      sender: 'John', text: 'Hello!', timestamp: new Date(), avatar: '/assets/images/cavia_wizard1.png' },
    { sender: 'Alice', text: 'Hi there!', timestamp: new Date(), avatar: '/assets/images/tortoise_barbarian1.png' },
    // Add more messages as needed
  ];
}
