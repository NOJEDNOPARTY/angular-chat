import {ChatList} from './ChatList';

export class ChatArray {
  message?: string;
  messageTime?: string;
  messageTrigger?: boolean;
}

export class Chat {
  id: number;
  img: string;
  name: string;
  lastSeen: string;
  chatListItem: ChatList;
  chatObj?: ChatArray[];

  constructor(id: number, img: string, name: string, lastSeen: string, chatListItem: ChatList, chatObj: ChatArray[]) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.lastSeen = lastSeen;
    this.chatListItem = chatListItem;
    this.chatObj = chatObj;
  }
}

