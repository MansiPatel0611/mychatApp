import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/LoginService';
import { UserLogin } from '../Model/UserLogin';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { HubConnectionService } from '../Service/HubConnectionService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  updateIndex: number;
  users: any;
  user = new UserLogin();
  password: string;
  constructor(private service: LoginService, private router: Router, private hubservice: HubConnectionService) { }

  onSubmit() {
   
    this.service.getUser(this.user.name)
      .subscribe((data: any) => {
        if (this.user.password === data.password) {
          this.hubservice.setconectid(this.user.name);
          data.isConnect = "1";
          this.service.update(data).subscribe((data1: any) => console.log(data1));
          this.router.navigate(['/list', this.user.name]);
        }
        else {
          alert("Password Does not match");
        }
      });
  }
  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => this.users = data);

  }

}
