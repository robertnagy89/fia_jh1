import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})


export class ChatComponent {
  @Output() closeChatEmitter = new EventEmitter();

  backToHome() {
    this.closeChatEmitter.emit();
  }
}
