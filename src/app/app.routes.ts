import { Routes, RouterModule }        from '@angular/router';

import { StartComponent }              from './start/';
import { LoginComponent }              from './login/';
import { SearchComponent }             from './search/';
import { AddTourComponent }            from './add-tour/';
import { TourComponent }               from './tour/';
import { UserComponent }               from './user/';
import { CabinetComponent }            from './cabinet/';
import { HelpComponent }               from './help/';


const appRoutes: Routes = [
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
  },
  {
    path: 'help',
    component: HelpComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
