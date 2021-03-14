export class ChatList {
  id: number;
  img: string;
  name: string;
  lastMessage?: string;
  messageTime?: string;

  constructor(img: string, name: string, lastMessage?: string, messageTime?: string) {
    this.img = img;
    this.name = name;
    this.lastMessage = lastMessage;
    this.messageTime = messageTime;
  }
}
