import { Routes, RouterModule } from '@angular/router';

import { UserComponent }  from './user.component';

const userRoutes: Routes = [
  { path: 'me', component: UserComponent }
];

export const userRouting = RouterModule.forChild(userRoutes);
