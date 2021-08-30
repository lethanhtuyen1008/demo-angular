import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastRequest } from '../../shared/custom-toast/custom-toast.module';
@Injectable({
  providedIn: 'root',
})
export class CustomToastService {
  messages: string[] = [];
  constructor(private messageService: MessageService) {}

  openToast(request: ToastRequest) {
    this.messageService.add({
      severity: request.type,
      summary: request.title,
      detail: request.message,
      life: 3000,
    });
  }

  clear() {
    this.messageService.clear();
  }
}
