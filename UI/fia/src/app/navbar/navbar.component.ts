import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { UserResourceService } from '../services/userresource.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private chatService: ChatService, private userResourceService: UserResourceService) { }

  toggleChat(): void {
    this.chatService.showChat = !this.chatService.showChat;
  }

  toggleResource(): void {
    this.userResourceService.showResources = !this.userResourceService.showResources;
  }
}
