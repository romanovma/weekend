import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';


import { Subscription }                 from 'rxjs/Subscription';

import { User }        from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit, OnDestroy {
  collection: string = "visited";
  grid: boolean = true;

  user: User;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.userService.getUserById(id)
                      .subscribe(
                        user => this.user = user,
                        error => this.errorMessage = <any>error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
