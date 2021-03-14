import {Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Chat} from '../../model/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chat: Chat[];
  newMessageTitle: string;
  messageObj: any;

  constructor(private dataHandler: DataHandlerService) { }

  removeBodyClass(){
    document.body.classList.remove('show-chat');
  }

  addMessage(event){
    this.messageObj = {
      message: this.newMessageTitle,
      messageTime: new Date().getHours() + ':' + (new Date().getMinutes() < 10 ? ('0' + new Date().getMinutes()) : new Date().getMinutes()),
      messageTrigger: false,
    };
    this.chat[0].chatObj.push(this.messageObj);
    this.newMessageTitle = '';
    this.dataHandler.scrollToTheBottomOfChat();
    this.dataHandler.chatListSubject.value[(this.chat[0].id) - 1].messageTime = this.messageObj.messageTime;
    this.dataHandler.chatListSubject.value[(this.chat[0].id) - 1].lastMessage = this.messageObj.message;
    event.preventDefault();
  }

  ngOnInit(): void {

    this.dataHandler.chatSubject.subscribe(chat => this.chat = chat);
    const timeout = setTimeout(() => {
      this.dataHandler.scrollToTheBottomOfChat();
    }, 150);
  }

}
