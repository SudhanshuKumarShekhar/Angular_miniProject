import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-chat-ui',
  imports: [],
  templateUrl: './chat-ui.html',
  styleUrl: './chat-ui.css',
})
export class ChatUi {
  messages = signal<string[]>([]);
  send(message:string){
    if(!message.trim())return;
      this.messages.update(lists => [...lists, message]);

  }
}
