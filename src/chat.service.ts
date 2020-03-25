import * as io from 'socket.io-client';
import { Observable, Subject, of} from 'rxjs';
import { rendererTypeName } from '@angular/compiler';


export class chatService {
    private web_url = 'http://localhost:3000';
    private socket;   
    public userInfo = new Subject<any>() 

    constructor() {
        this.socket = io(this.web_url);
    }

    public joinedLobby(){
        this.socket.on('joinedLobby', (data) => {
            this.userInfo.next(data)})
    }
    
    public joinRoom(data){ 
        this.socket.emit('joinRoom', data)
        this.userInfo.next(data)
    }



}