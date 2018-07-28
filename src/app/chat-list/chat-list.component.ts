import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/LoginService';
import { UserLogin } from '../Model/UserLogin';
import { ActivatedRoute } from '@angular/router';
import { HubConnectionService } from '../Service/HubConnectionService';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  interval: any;
  public users: Array<UserLogin> = [];
  sender: string
  senderupdate = new UserLogin();
  constructor(private _dataservice: LoginService, private route: ActivatedRoute, private hubservice: HubConnectionService) { }

  ngOnInit() {
    this._dataservice.getUsers()
      .subscribe((data: any) => this.users = data);
    this.interval = setInterval(() => {
      this._dataservice.getUsers()
        .subscribe((data: any) => this.users = data);
    }, 10000);

    let name = this.route.snapshot.params['name'];
    this._dataservice.setsender(name);
    this.sender = this._dataservice.getsender();

  }

}
