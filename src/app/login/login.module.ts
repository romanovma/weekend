import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }                  from '@angular/forms';

import { LoginButtonComponent }    from './login-button/login-button.component';
import { LoginComponent }          from './login.component';
import { loginRouting }    from './login.routes';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    loginRouting,
    FormsModule
  ],
  declarations: [
    LoginComponent,
    LoginButtonComponent,
    SignupComponent
  ],
  exports: [
    LoginButtonComponent
  ],
  providers: []
})

export class LoginModule {}
