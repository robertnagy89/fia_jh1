import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {
  @Output() contentEmitter = new EventEmitter();
  content: string = '';

  sendMessage() {
    if (this.content.trim() !== "") {
      this.contentEmitter.emit(this.content);
    }
  }
}
