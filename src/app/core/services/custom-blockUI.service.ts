import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomBlockUIService {
  constructor() {}
  blockUI: boolean = false;

  openBlockUI() {
    this.blockUI = true;
  }

  closeBlockUI() {
    this.blockUI = false;
  }
}
