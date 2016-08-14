import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { MdButtonModule }       from '@angular2-material/button';

import { LoginButtonComponent }    from './login-button/login-button.component';
import { LoginComponent }          from './login.component';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule
  ],
  declarations: [
    LoginComponent,
    LoginButtonComponent
  ],
  exports: [
    LoginButtonComponent
  ],
  providers: []
})

export class LoginModule {}
