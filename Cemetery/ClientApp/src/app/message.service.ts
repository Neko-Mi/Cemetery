import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages: string[] = [];

  add(message: string) {
    // this.messages = [];
    this.messages.push(message);
  }

  addnew(message: string) {
    this.messages = [];
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
