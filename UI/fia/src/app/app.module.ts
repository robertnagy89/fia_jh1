import { ReactiveFormsModule } from '@angular/forms';
import { UserResourceComponent } from './components/userresource/userresource.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageInputComponent } from './components/message-input/message-input.component';
import { PrivateChatWindowComponent } from './components/private-chat-window/private-chat-window.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChatService } from './services/chat.service';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { ChatGptWindow } from './components/chat-gpt-window/chat-gpt-window.component';


@NgModule({
  declarations: [
    AppComponent,
    UserResourceComponent,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    MessagesComponent,
    MessageInputComponent,
    PrivateChatWindowComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserSettingsComponent,
    ChatGptWindow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


