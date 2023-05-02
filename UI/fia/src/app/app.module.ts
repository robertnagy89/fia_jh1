import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserResourceComponent } from './userresource/userresource.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    UserResourceComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    ChatComponent,
    MessagesComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
