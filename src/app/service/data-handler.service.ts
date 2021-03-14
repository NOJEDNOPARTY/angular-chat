import { Injectable } from '@angular/core';
import { ChatList } from '../model/ChatList';
import { DataIn } from '../data/dataIn';
import { Chat } from '../model/Chat';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataHandlerService {
  chatListSubject = new BehaviorSubject<ChatList[]>(DataIn.chatList);
  chatSubject = new BehaviorSubject<Chat[]>(DataIn.chat);

  activeChatSubject = new BehaviorSubject<Chat>(DataIn.chat[0]);

  scrollToTheBottomOfChat(): void {
    const chatField = document.querySelector('.chat-field');
    const timeout = setTimeout(() => {
      chatField.scrollTop = chatField.scrollHeight;
    }, 100);
  }

  constructor() {}

  setActiveChat(id: number): void {
    this.activeChatSubject.next(
      this.chatSubject.value.find((chat) => chat.id === id)
    );
  }

  getLastMessage(id: number): string {
    const { chatObj } = this.chatSubject.value.find((chat) => chat.id === id);
    const message = chatObj[chatObj.length - 1].message;
    return message;
  }
}
