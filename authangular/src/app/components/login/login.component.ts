import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { EmployersService } from '../../services/employers.service';
import { Token } from '../../models/token';
import { User } from '../../models/user';

@Component({
  selector: 'app-series',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public token!: Token;
  public user!: User;
  public message!: any;
  @ViewChild('usernameBox') username!: ElementRef;
  @ViewChild('passwordBox') password!: ElementRef;

  constructor(private _service: EmployersService, private _router: Router) {}

  login() {
    var username = this.username.nativeElement.value;
    var password = this.password.nativeElement.value;
    var user = new User(username, password);

    this._service.validateUser(user).then((response: any) => {
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 404 ||
        response.status == 500
      ) {
        this.message = 'User or password incorrect';
        console.log(response);
      } else {
        this.token = response;
        this._service.setToken(this.token);
        this._service.setUser(user.username);
        window.location.href = '/employers';
      }
    });
  }

  ngOnInit(): void {}
}
