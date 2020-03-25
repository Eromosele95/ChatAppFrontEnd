import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { LobbyComponent } from './components/lobby/lobby.component';


const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component: LoginComponent},
  { path:'lobby', component: LobbyComponent},
  { path:'lobby/:chatroomName', component: ChatroomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
