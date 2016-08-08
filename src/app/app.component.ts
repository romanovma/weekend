import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None // make styles in app.component.css available for all child components
})
export class AppComponent {
  title = 'app works!';
}
