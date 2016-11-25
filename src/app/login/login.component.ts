import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User }        from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    user: User;
    error: any;

    constructor(
      private userService: UserService,
      private router: Router
    ) {}

    ngOnInit() {
        this.user = new User();
    }

    login() {
      this.userService
          .login(this.user)
          .then(data => {
              localStorage.setItem('token', data.token);
              localStorage.setItem('userId', data.userId);
              // this.user = user;
              this.router.navigate(['/me', data._id]);
          })
          .catch(error => {
              this.error = error
          }); // TODO: Display error message
    }
}
