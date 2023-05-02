import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LandingComponent } from './landing/landing.component';
import { UserResourceComponent } from './userresource/userresource.component';

const routes: Routes = [
  { path: '', component: LandingComponent }, // Route for app-landing component
  { path: 'chat', component: ChatComponent }, // Route for app-chat component
  { path: 'user-resource', component: UserResourceComponent }, // Route for app-userresource component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
