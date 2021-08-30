import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CustomToastService {
  messages: string[] = [];
  constructor(private messageService: MessageService) {}
  add(message: string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  clear() {
    this.messages = [];
  }
}
