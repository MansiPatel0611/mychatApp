import { Injectable } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';

@Injectable()
export class HubConnectionService {

  notifySender: string;
  msg: string;
  unread: number = 1;
  text: string;
  messages: string[] = [];
 // messages: string;
  private _hubConnection: HubConnection;

  constructor() {
    this.init();
  }

  setconectid(sender) {
    this._hubConnection.invoke('setconnectid', sender); 
  }

  setstatus(sender) {
    this._hubConnection.invoke('setstatus', sender); 
  }

  getnotify() {
    return this.unread;
  }

  getnotifySender() {
    return this.notifySender;
  }

  //notifymsg(recevierid) {
  //  this._hubConnection
  //    .invoke('Sendnotify', recevierid);
  //  return this.msg;
  //}

  senddirectmsg(recevierid, senderid, message, sender) {
    //this.messages = '';
    this._hubConnection
      .invoke('Send', recevierid, senderid, message, sender);
   // console.log(this.text);
    return this.messages;
  }
 

  private init() {

    //this.messages = [];

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/chat')
      .configureLogging(signalR.LogLevel.Information).build();

    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :'));

    this._hubConnection.on('setconnectid', (sender: string) => { });

    this._hubConnection.on('setstatus', (sender: string) => { });

    //this._hubConnection.on('sendnotify', (msg: string) => {
    //  this.msg = msg;
    //});

    this._hubConnection.on('send', (receivedMessage: string, sender: string) => {
     // this.unread = null;
      this.text = `${sender}:${receivedMessage}`;
       this.messages.push(this.text);

    //  this.messages = this.text;
      //console.log(this.messages);
      this.notifySender = sender;
     // this.unread = this.unread + 1;
      //return this.messages;
    });
  }
}
