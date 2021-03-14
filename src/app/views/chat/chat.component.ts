import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataHandlerService } from '../../service/data-handler.service';
import { Chat } from '../../model/Chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})

export class ChatComponent implements OnInit {
  public chat: Chat;
  public newMessageTitle: '';
  public messageObj: any;
  @Output() onClick = new EventEmitter();

  constructor(private dataHandler: DataHandlerService) {}

  public hideChat(): void {
    this.onClick.emit();
  }

  public addMessage(event): void {
    this.messageObj = {
      message: this.newMessageTitle,
      messageTime:
        (new Date().getHours() < 10
          ? '0' + new Date().getHours()
          : new Date().getHours()) +
        ':' +
        (new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes()),
      messageTrigger: false,
    };
    this.chat.chatObj.push(this.messageObj);
    this.newMessageTitle = '';
    this.dataHandler.scrollToTheBottomOfChat();
    event.preventDefault();
  }

  public ngOnInit(): void {
    this.dataHandler.activeChatSubject.subscribe((chat) => (this.chat = chat));
    setTimeout(() => {
      this.dataHandler.scrollToTheBottomOfChat();
    }, 150);
  }
}
