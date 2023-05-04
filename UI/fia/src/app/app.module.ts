import {  ReactiveFormsModule } from '@angular/forms';
import { UserResourceComponent } from './userresource/userresource.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { PrivateChatWindowComponent } from './private-chat-window/private-chat-window.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './services/chat.service';


@NgModule({
  declarations: [
    AppComponent,
    UserResourceComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ChatComponent,
    MessagesComponent,
    MessageInputComponent,
    PrivateChatWindowComponent,
    UserResourceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


