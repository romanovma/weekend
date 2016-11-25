import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }  from './login.component';
import { SignupComponent }  from './signup/signup.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

export const loginRouting = RouterModule.forChild(loginRoutes);
