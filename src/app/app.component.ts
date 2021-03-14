import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Chat Project';

  showChatTrigger;

  viewChatMethod(st: string): void {
    this.showChatTrigger = !this.showChatTrigger;
  }
}
