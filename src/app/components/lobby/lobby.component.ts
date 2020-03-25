import { Component, OnInit } from '@angular/core';
import {chatService} from 'src/chat.service'
import {Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  chatroomName: String; // string to create new chatroom

  constructor(private chatService: chatService,
              private router: Router,
              private route: ActivatedRoute
            ){ }

  ngOnInit(): void {
    this.chatService.userInfo.subscribe((userDetails) =>
    {
      this.chatroomName == userDetails.chatroomName
      this.chatService.userInfo.next
      console.log(userDetails)
    })
  }
  onClick(){
    console.log(this.chatroomName)
    this.chatService.userInfo.next
    this.router.navigate([this.chatroomName],{relativeTo: this.route})
  }
}
