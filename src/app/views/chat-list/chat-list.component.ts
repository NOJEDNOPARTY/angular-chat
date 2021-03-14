import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ChatList } from '../../model/ChatList';
import { DataHandlerService } from '../../service/data-handler.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  public chatList: ChatList[];
  @Output() onClick = new EventEmitter();

  public constructor(private dataHandler: DataHandlerService) {}

  public ngOnInit(): void {
    this.dataHandler.chatListSubject.subscribe(
      (chatlist) => (this.chatList = chatlist)
    );
  }

  public showChatByItem(chatList: ChatList): void {
    this.dataHandler.scrollToTheBottomOfChat();
    this.dataHandler.setActiveChat(chatList.id);
    this.onClick.emit();
  }

  public getLastMessageTime(id): string {
    return this.dataHandler.getLastMessageTime(id);
  }

  public getLastMessage(id): string {
    return this.dataHandler.getLastMessage(id);
  }
}
