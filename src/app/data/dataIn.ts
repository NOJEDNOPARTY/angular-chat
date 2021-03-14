import {ChatList} from '../model/ChatList';
import {Chat} from '../model/Chat';

export class DataIn {

  static chatList: ChatList[] = [
    {
      id: 1,
      img: './assets/images/ava-1.png',
      name: 'Julia Semid',
      lastMessage: 'Must go, talk to you later',
      messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
    },
    {
      id: 2,
      img: './assets/images/ava-2.png',
      name: 'Joan Chapman',
      lastMessage: 'Ok, let me know a soon as...',
      messageTime: new Date('January 4 2021 12:15').getHours() + ':' + new Date('January 4 2021 12:15').getMinutes()
    },
    {
      id: 3,
      img: './assets/images/ava-3.png',
      name: 'James Dullmo',
      lastMessage: 'Ok',
      messageTime: new Date('January 4 2021 12:10').getHours() + ':' + new Date('January 4 2021 12:10').getMinutes()
    },
    {
      id: 4,
      img: './assets/images/ava-4.png',
      name: 'San Francisco Project',
      lastMessage: 'rainy weather',
      messageTime: new Date('January 4 2021 12:12').getHours() + ':' + new Date('January 4 2021 12:12').getMinutes()
    },
    {
      id: 5,
      img: './assets/images/ava-5.png',
      name: 'Kate Munch',
      lastMessage: 'Kate Munch, Hello!',
      messageTime: new Date('January 4 2021 12:13').getHours() + ':' + new Date('January 4 2021 12:13').getMinutes()
    },
    {
      id: 6,
      img: './assets/images/ava-6.png',
      name: 'Jake Morgan',
      lastMessage: 'Great ',
      messageTime: new Date('January 4 2021 12:33').getHours() + ':' + new Date('January 4 2021 12:33').getMinutes()
    },
    {
      id: 7,
      img: './assets/images/ava-7.png',
      name: 'Ski trip',
      lastMessage: 'Ski it`s good',
      messageTime: new Date('January 4 2021 12:33').getHours() + ':' + new Date('January 4 2021 12:33').getMinutes()
    },
    {
      id: 8,
      img: './assets/images/ava-8.png',
      name: 'Jenifer Jones',
      lastMessage: 'later',
      messageTime: new Date('January 4 2021 12:34').getHours() + ':' + new Date('January 4 2021 12:34').getMinutes()
    },
    {
      id: 9,
      img: './assets/images/ava-9.png',
      name: 'Dianne Aburey',
      lastMessage: 'let`s play',
      messageTime: new Date('January 4 2021 12:35').getHours() + ':' + new Date('January 4 2021 12:35').getMinutes()
    },
    {
      id: 10,
      img: './assets/images/ava-10.png',
      name: 'Savannah Adams',
      lastMessage: 'seen',
      messageTime: new Date('January 4 2021 12:12').getHours() + ':' + new Date('January 4 2021 12:12').getMinutes()
    },
    {
      id: 11,
      img: './assets/images/ava-11.png',
      name: 'Darrell Aston',
      lastMessage: 'lets go',
      messageTime: new Date('January 4 2021 12:11').getHours() + ':' + new Date('January 4 2021 12:11').getMinutes()
    },
    {
      id: 12,
      img: './assets/images/ava-12.png',
      name: 'Jenny Astor',
      lastMessage: 'Must go, talk to you later',
      messageTime: new Date('January 4 2021 11:30').getHours() + ':' + new Date('January 4 2021 11:30').getMinutes()
    },
    {
      id: 13,
      img: './assets/images/ava-13.png',
      name: 'Kristin Bacon',
      lastMessage: 'never seen',
      messageTime: new Date('January 4 2021 20:30').getHours() + ':' + new Date('January 4 2021 20:30').getMinutes()
    },
    {
      id: 14,
      img: './assets/images/ava-14.png',
      name: 'Jacob Bell',
      lastMessage: 'lol, rly?',
      messageTime: new Date('January 4 2021 18:30').getHours() + ':' + new Date('January 4 2021 18:30').getMinutes()
    },
    {
      id: 15,
      img: './assets/images/ava-15.png',
      name: 'Jane Barrel',
      lastMessage: 'no, i will wait for u',
      messageTime: new Date('January 4 2021 18:30').getHours() + ':' + new Date('January 4 2021 18:30').getMinutes()
    },
  ];

  static chat: Chat[] = [
    {
      id: 1,
      img: './assets/images/ava-1.png',
      name: 'Julia Semid',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[0],
      chatObj: [
        {
          message: 'Hello, how are you?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'I want to see you',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'hello, i`m fine',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
        {
          message: 'Must go, talk to you later',
          messageTime: DataIn.chatList[0].messageTime,
          messageTrigger: false,
        },
      ]
    },
    {
      id: 2,
      img: './assets/images/ava-2.png',
      name: 'Joan Chapman',
      lastSeen: 'last seen 5 hours ago',
      chatListItem: DataIn.chatList[1],
      chatObj: [
        {
          message: 'Hello, can u show work today?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
        {
          message: 'Hello, today i can`t, cause i`m away from home',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'Ok, let me know a soon as...',
          messageTime: DataIn.chatList[1].messageTime,
          messageTrigger: false,
        },
      ]
    },
    {
      id: 3,
      img: './assets/images/ava-3.png',
      name: 'James Dullmo',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[2],
      chatObj: [
        {
          message: 'Let`s drink today?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'Ok',
          messageTime: DataIn.chatList[2].messageTime,
          messageTrigger: false,
        },
      ]
    },
    {
      id: 4,
      img: './assets/images/ava-4.png',
      name: 'San Francisco Project',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[3],
      chatObj: [
        {
          message: 'Hello, what weather today ?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'rainy weather',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 5,
      img: './assets/images/ava-5.png',
      name: 'Kate Munch',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[4],
      chatObj: [
        {
          message: 'Kate Munch, Hello!',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 6,
      img: './assets/images/ava-6.png',
      name: 'Jake Morgan',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[5],
      chatObj: [
        {
          message: 'Work is done?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'yes',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
        {
          message: 'Great',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
      ]
    },
    {
      id: 7,
      img: './assets/images/ava-7.png',
      name: 'Ski trip',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[6],
      chatObj: [
        {
          message: 'Ski it`s good',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 8,
      img: './assets/images/ava-8.png',
      name: 'Jenifer Jones',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[7],
      chatObj: [
        {
          message: 'See you today?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'later',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 9,
      img: './assets/images/ava-9.png',
      name: 'Dianne Aburey',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[8],
      chatObj: [
        {
          message: 'let`s play',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 10,
      img: './assets/images/ava-10.png',
      name: 'Savannah Adams',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[9],
      chatObj: [
        {
          message: 'did u see inferno ?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'seen',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 11,
      img: './assets/images/ava-11.png',
      name: 'Darrell Aston',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[10],
      chatObj: [
        {
          message: 'cs?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'lets go',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 12,
      img: './assets/images/ava-12.png',
      name: 'Jenny Astor',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[11],
      chatObj: [
        {
          message: 'we need to talk now',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'Must go, talk to you later',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 13,
      img: './assets/images/ava-13.png',
      name: 'Kristin Bacon',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[12],
      chatObj: [
        {
          message: 'did u see rainbow?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'never seen',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 14,
      img: './assets/images/ava-14.png',
      name: 'Jacob Bell',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[13],
      chatObj: [
        {
          message: 'trump is dumb',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'lol, rly?',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ]
    },
    {
      id: 15,
      img: './assets/images/ava-15.png',
      name: 'Jane Barrel',
      lastSeen: 'last seen 2 hours ago',
      chatListItem: DataIn.chatList[14],
      chatObj: [
        {
          message: 'u can go home now',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: true,
        },
        {
          message: 'no, i will wait for u',
          messageTime: new Date('January 4 2021 12:30').getHours() + ':' + new Date('January 4 2021 12:30').getMinutes(),
          messageTrigger: false,
        },
      ],
    },
  ];

}
