import { Component, ViewEncapsulation } from '@angular/core';
// import { ROUTER_DIRECTIVES } from '@angular/router';

// import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
// import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';



@Component({
  // //moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    // ROUTER_DIRECTIVES,
    // MD_TOOLBAR_DIRECTIVES,
    // MD_BUTTON_DIRECTIVES
  ],
  encapsulation: ViewEncapsulation.None // make styles in app.component.css available for all child components
})
export class AppComponent {
}
