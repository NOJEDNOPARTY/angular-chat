import { Component, OnInit } from '@angular/core';
import { ChatList } from '../../model/ChatList';
import { DataHandlerService } from '../../service/data-handler.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  chatList: ChatList[];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.chatListSubject.subscribe(
      (chatlist) => (this.chatList = chatlist)
    );
  }

  addBodyClass(): void {
    document.body.classList.add('show-chat');
  }

  showChatByItem(chatList: ChatList): void {
    this.dataHandler.scrollToTheBottomOfChat();
    this.dataHandler.setActiveChat(chatList.id);
  }

  getLastMessage(id): string {
    return this.dataHandler.getLastMessage(id);
  }
}
