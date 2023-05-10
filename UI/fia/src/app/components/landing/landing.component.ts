import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  apiErrorMessages: string[] = [];
  openChat = false;

  constructor(private formBuilder: FormBuilder, private chatService: ChatService, private authService: AuthService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  submitForm() {

    this.submitted = true;
    this.apiErrorMessages = [];
    if (this.userForm.valid) {
      this.chatService.registerUser(this.userForm.value)
        .subscribe({
          next: () => {
            this.chatService.myName = this.userForm.get('name')?.value;
            this.openChat = true;
            this.authService.onLogin();
            this.userForm.reset();
            this.submitted = false;
          },
        error: error => {
          if (typeof (error.error) !== 'object') {
            this.apiErrorMessages.push(error.error);
          }
        }
      })
    }
  }

  closeChat() {
    this.openChat = false;
  }
}
