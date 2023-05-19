import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { UserStoreService } from '../../services/user-store.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent implements OnInit, OnDestroy {
  @Output() closeChatEmitter = new EventEmitter();
  showChatFlag: boolean = true;
  defaultAvatar: string = '/assets/images/cavia_wizard1.png';
  selectedUser: string = "";
  name: string = "";
  role: string = "";

  constructor(public chatService: ChatService, private userStore: UserStoreService, private auth: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {

    this.userStore.getRoleFromStore()
      .subscribe(val => {
        const roleFromToken = this.auth.getRoleFromToken();
        this.role = val || roleFromToken;
      });

    this.userStore.getNameFromStore()
      .subscribe(val => {
      const nameFromToken = this.auth.getNameFromToken(); 
      this.name = val || nameFromToken;
      });

    if (this.chatService.onlineUsers && this.chatService.onlineUsers.includes(this.name)) {
      console.log('User is already registered:', this.name);
    } else {
      this.chatService.registerUser();
    }
  }

  ngOnDestroy() {
    this.chatService.removeUserConnectionId();
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
