import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from '../../environments/environment';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  myName: string = '';
  showChat: boolean = false;
  private chatConnection?: HubConnection;

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
    })
  }

  stopChatConnection() {
    this.chatConnection?.stop().catch(err => {
      console.log(err);
    })
  }
}
