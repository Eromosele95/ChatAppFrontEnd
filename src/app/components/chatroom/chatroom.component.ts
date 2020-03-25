import { Component, OnInit } from '@angular/core';
import { chatService} from 'src/chat.service'

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {
   name: String
   messages: Array<{
     user:String,
     message: String,
     chatroomname: String
   }>
  constructor() { }

  ngOnInit(): void {
    
  }

}
