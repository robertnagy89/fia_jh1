import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, InjectionToken, Optional, ViewContainerRef } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from '../../environments/environment';
import { Message } from '../../models/message';
import { User } from '../../models/user';
import { PrivateChatWindowComponent } from '../private-chat-window/private-chat-window.component';

export const VIEW_CONTAINER_REF = new InjectionToken<ViewContainerRef>('VIEW_CONTAINER_REF');


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  myName: string = '';
  myAvatar: string = 'assets/images/cavia_wizard1.png';
  showChat: boolean = false;
  private chatConnection?: HubConnection;
  onlineUsers: string[] = [];
  messages: Message[] = [];
  privateMessages: Message[] = [];
  privateChatWindows: { toUser: string, componentRef: ComponentRef<PrivateChatWindowComponent>, active: boolean }[] = [];
  windowInitialized: boolean = false;

  constructor(private httpClient: HttpClient, private componentFactoryResolver: ComponentFactoryResolver,
    @Optional() @Inject(VIEW_CONTAINER_REF) private privateChatContainer: ViewContainerRef)
  {
    console.log(privateChatContainer);
  }

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
    });
    this.chatConnection.on("OpenPrivateChat", (newMessage: Message) => {
      this.privateMessages = [...this.privateMessages, newMessage];
      this.windowInitialized = true;
    });
    this.chatConnection.on("ReceivePrivateMessage", (newMessage: Message) => {
      this.privateMessages = [...this.privateMessages, newMessage];
    });
    this.chatConnection.on("ClosePrivateMessage", () => {
      this.windowInitialized = false; 
      this.privateMessages = [];
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
      from: this.myName,
      to: "",
      text: content,
      timestamp: new Date(),
      avatar: this.myAvatar
    }

    return this.chatConnection?.invoke('ReceiveUserMessage', message)
      .catch(err => console.log(err));
  }

  async sendPrivateMessage(to: string, content: string) {
    const message: Message = {
      from: this.myName,
      to: to,
      text: content,
      timestamp: new Date(),
      avatar: this.myAvatar
    };
    if (!this.windowInitialized) {
      this.windowInitialized = true;
      return this.chatConnection?.invoke('OpenPrivateChat', message).then(() => {
        this.privateMessages = [...this.privateMessages, message];
      })
        .catch(err => console.log(err));
    }
    else {
      return this.chatConnection?.invoke('ReceivePrivateMessage', message)
        .catch(err => console.log(err));
    }
  }

  async closePrivateChatMessage(otherUser: string) {
    return this.chatConnection?.invoke("RemovePrivateChat", this.myName, otherUser)
      .catch(err => console.log(err));
  }

  openPrivateChat(otherUser: string) {
    // Check if there is already an active private chat window for the other user
    const existingChatWindow = this.privateChatWindows.find(window => window.toUser === otherUser);
    console.log(existingChatWindow);

    if (existingChatWindow && !this.windowInitialized) {
      // If there is an active private chat window, bring it to front
      existingChatWindow.componentRef.instance.activeChatWindow = true;
    } else {
      // If there is no active private chat window, create a new one
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PrivateChatWindowComponent);
      console.log(componentFactory);
      const componentRef = this.privateChatContainer.createComponent(componentFactory);
      componentRef.instance.toUser = otherUser;

      // Add the new private chat window to the list of active chat windows
      this.privateChatWindows.push({ toUser: otherUser, componentRef, active: true });
    }
  }
}
