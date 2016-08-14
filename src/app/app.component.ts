import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  directives: [],
  encapsulation: ViewEncapsulation.None // make styles in app.component.css available for all child components
})
export class AppComponent {
}
