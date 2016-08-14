import { Routes, RouterModule }        from '@angular/router';

import { LoginComponent }              from './login/';
import { SearchComponent }             from './search/';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchComponent
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
