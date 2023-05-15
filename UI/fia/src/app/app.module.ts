import { ReactiveFormsModule } from '@angular/forms';
import { UserResourceComponent } from './components/userresource/userresource.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { PrivateChatWindowComponent } from './components/private-chat-window/private-chat-window.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';


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
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


