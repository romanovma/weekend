import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-button',
  templateUrl: 'login-button.component.html',
  styleUrls: ['login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  @Input() loginType: string;
  @Input() cabinet: boolean = false;

  constructor(
    private router: Router) {}

  ngOnInit() {}

  login() {
    if (this.cabinet) {
      this.router.navigate(['/cabinet', 1]);
    } else {
      this.router.navigate(['/me', 1]);
    }
  }

}
