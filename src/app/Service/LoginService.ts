import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserLogin } from '../Model/UserLogin';
@Injectable()
export class LoginService {

  //private headers: HttpHeaders;
  private accessPointUrl: string = '/api/login';
//  users: Array<UserLogin>;

  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }
  public sender: string;
  public recevier: string;

  setsender(name) {
    this.sender = name;
  }

  getsender() {
    return this.sender;
  }
  setreceiver(name) {
    this.recevier = name;
  }
  getrecevier() {
    return this.recevier;
  }
  getUser(id) {
    return this.http.get(this.accessPointUrl + '/' + id);
  }
  addUser(user: UserLogin) {
    return this.http.post(this.accessPointUrl, user);
  }
  getUsers() {
    return this.http.get(this.accessPointUrl);
  }
  update(user: UserLogin) {
    return this.http.put(this.accessPointUrl + '/' + user.id, user);
  }
}
