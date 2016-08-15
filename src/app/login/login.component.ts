import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
  constTrue: boolean = true;

  loginVk: string = 'with VK';
  loginFacebook: string = 'with Facebook';
  loginMail: string = 'with email';
  loginCabinet: string = 'as operator';

  constructor() {}

  ngOnInit() {
  }

}
