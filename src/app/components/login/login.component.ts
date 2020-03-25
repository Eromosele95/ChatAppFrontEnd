import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { chatService } from 'src/chat.service'
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signup: FormGroup
  userDetails = {
    username: String,
    room: String,
    message: String 
  }
  
  constructor(private chatService: chatService, private router: Router){
  }

  ngOnInit(){
    this.signup = new FormGroup({
      'username': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    this.userDetails.username = this.signup.get('username').value
    console.log(this.userDetails)
    // on Submit user logs in and joins lobby
    this.chatService.joinRoom(this.userDetails)
    console.log(this.userDetails)
    this.router.navigate(['/lobby']);
  }



} 


