import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class HubConnectionService {

  text: string;
  messages: string[] = [];
  private _hubConnection: HubConnection;
  constructor() {
    this.init();
  }
  setconectid(sender) {
    this._hubConnection.invoke('setconnectid', sender); 
  }

  senddirectmsg(recevierid, senderid, message, sender) {
   // console.log(recevierid);
    this._hubConnection
      .invoke('Send', recevierid, senderid, message, sender);
   // console.log(this.messages);
    return this.messages;
    //return this.text;
  }

  private init() {
    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat')
      .configureLogging(signalR.LogLevel.Information).build();

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('setconnectid', (sender: string) => { });

    this._hubConnection.on('send', (receivedMessage: string, sender: string) => {
      this.text = `${sender}:${receivedMessage}`;
     // console.log(this.text);
      this.messages.push(this.text);
     // console.log(this.messages);
    });
  }
}
