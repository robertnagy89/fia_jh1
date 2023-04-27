import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from '../../environments/environment';
import { Message } from '../../models/message';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  myName: string = '';
  myAvatar: string = 'cavia_wizard1';
  showChat: boolean = false;
  private chatConnection?: HubConnection;
  onlineUsers: string[] = [];
  messages: Message[] = [];

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User) {
    return this.httpClient.post(`${environment.apiUrl}api/chat/register`, user, { responseType: 'text' })
  }

  createChatConnection() {
    this.chatConnection = new HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}hubs/chat`).withAutomaticReconnect().build();
    console.log(this.chatConnection);
    this.chatConnection.start().catch(err => {
      console.log(err);
    });
    this.chatConnection.on('UserConnected', () => {
      this.addUserConnectionId();
    });
    this.chatConnection.on('OnlineUsers', (onlineUsers) => {
      this.onlineUsers = [...onlineUsers];
    });
    this.chatConnection.on("NewMessage", (newMessage: Message) => {
      this.messages = [...this.messages, newMessage];
    })
  }

  stopChatConnection() {
    this.chatConnection?.stop().catch(err => {
      console.log(err);
    })
  }

  async addUserConnectionId() {

    return this.chatConnection?.invoke("AddUserConnectionId", this.myName)
      .catch(err => console.log(err));
  }

  async sendMessage(content: string) {
    const message: Message = {
      sender: this.myName,
      text: content,
      timestamp: new Date(),
      avatar: this.myAvatar
    }

    return this.chatConnection?.invoke('ReceiveUserMessage', message)
      .catch(err => console.log(err));
  }

}
