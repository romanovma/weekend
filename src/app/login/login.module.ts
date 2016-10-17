import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LoginButtonComponent }    from './login-button/login-button.component';
import { LoginComponent }          from './login.component';
import { loginRouting }    from './login.routes';



@NgModule({
  imports: [
    CommonModule,
    loginRouting
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
