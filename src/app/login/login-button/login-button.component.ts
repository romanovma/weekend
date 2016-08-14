import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: 'login-button.component.html',
  styleUrls: ['login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  @Input() loginType: string;

  constructor() {}

  ngOnInit() {}

}
