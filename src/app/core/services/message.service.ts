import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // Devemos deixa propriedades privado para ter acesso somente em seu escopo
  private messages: string[] = [];

  constructor() {}

  add(message: string): void{
    this.messages.push(message)
  }

  clear(): void{
    this.messages = [];
  }


  // Pegando a mensagem que é privada para chamar onde quer usar (Boa prática)
  getMessages(): string[]{
    return this.messages
  }
}
