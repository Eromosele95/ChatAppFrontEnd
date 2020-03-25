import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { chatService } from '../chat.service';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    LobbyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [chatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
