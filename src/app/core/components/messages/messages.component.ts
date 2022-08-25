import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent  {

  constructor(public messageService: MessageService) { }


}
