import { provideRouter, RouterConfig } from '@angular/router';

import { StartComponent }              from './start/';
import { LoginComponent }              from './login/';
import { SearchComponent }             from './search/';
import { AddTourComponent }            from './add-tour/';
import { TourComponent }               from './tour/';
import { UserComponent }               from './user/';
import { CabinetComponent }            from './cabinet/';


const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'tour/add',
    component: AddTourComponent
  },
  {
    path: 'tour/:id',
    component: TourComponent
  },
  {
    path: 'me/:id',
    component: UserComponent
  },
  {
    path: 'cabinet/:id',
    component: CabinetComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
