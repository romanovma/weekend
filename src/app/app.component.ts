import { Component, ViewEncapsulation } from '@angular/core';

import { User }        from './user/user';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None // make styles in app.component.css available for all child components
})
export class AppComponent {

    constructor(
        private userService: UserService
    ) {}

    logout() {
        this.userService.logout();
    }

    isLoggedIn() {
        return this.userService.isLoggedIn();
    }
}
