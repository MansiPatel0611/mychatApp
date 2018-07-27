import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/LoginService';
import { UserLogin } from '../Model/UserLogin';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { HubConnectionService } from '../Service/HubConnectionService';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  public users: Array<UserLogin> = [];
  sender: string
  senderupdate = new UserLogin();
  constructor(private _dataservice: LoginService, private route: ActivatedRoute, private hubservice: HubConnectionService) { }

  ngOnInit() {
    this._dataservice.getUsers()
      .subscribe((data: any) => this.users = data);
    let name = this.route.snapshot.params['name'];
    this._dataservice.setsender(name);
    this.sender = this._dataservice.getsender();

  }

}
