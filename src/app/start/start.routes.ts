import { Routes, RouterModule } from '@angular/router';

import { StartComponent }  from './start.component';

const startRoutes: Routes = [
  { path: 'start', component: StartComponent }
];

export const startRouting = RouterModule.forChild(startRoutes);
