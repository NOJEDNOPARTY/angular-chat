import { Injectable } from '@angular/core';
import {ChatList} from '../model/ChatList';
import {DataIn} from '../data/dataIn';
import {Chat} from '../model/Chat';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  chatListSubject = new BehaviorSubject<ChatList[]>(DataIn.chatList);
  chatSubject = new BehaviorSubject<Chat[]>(DataIn.chat);

  scrollToTheBottomOfChat(){
    const chatField = document.querySelector('.chat-field');
    const timeout = setTimeout(() => {
      chatField.scrollTop = chatField.scrollHeight;
    }, 100);
  }

  constructor() {}

  fillChats() {
    this.chatSubject.next(DataIn.chat);
  }

  fillChatByList(chatList: ChatList) {
    const chatListing = DataIn.chat.filter(chat => chat.chatListItem === chatList);
    this.chatSubject.next(chatListing);
  }
}
