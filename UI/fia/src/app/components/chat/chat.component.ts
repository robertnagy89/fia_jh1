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

      if (this.name) {
        this.chatService.registerUser();
      }
    });
  }

  ngOnDestroy() {
    this.chatService.removeUserConnectionId();
  }

  backToHome() {
    this.closeChatEmitter.emit();
  }

  isChatVisible(): boolean { // Use a different name for the function
    return this.chatService.showChat;
  }

  toggleChat(): void {
    this.showChatFlag = !this.showChatFlag; // Update the value of the boolean flag
  }

  sendMessage(content: string) {
    this.chatService.sendMessage(content);
  }

  openPrivateChat(toUser: string) {
    this.selectedUser = toUser;
    this.chatService.openPrivateChat(toUser);
  }
}
