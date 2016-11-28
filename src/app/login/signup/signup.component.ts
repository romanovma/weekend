import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { User }        from '../../user/user';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User;
  error: any;

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
      this.user = new User();
  }

  save() {
    this.userService
        .save(this.user)
        .then(user => {
            this.user = user;
            this.router.navigate(['/me']);
        })
        .catch(error => {
            this.error = error
        }); // TODO: Display error message
  }
}
