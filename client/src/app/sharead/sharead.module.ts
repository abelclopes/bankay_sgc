import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[MessagesComponent],
  declarations: [MessagesComponent],
  providers:[MessagesService]
})
export class ShareadModule { }
