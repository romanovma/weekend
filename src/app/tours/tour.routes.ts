import { Routes, RouterModule } from '@angular/router';

import { TourBuyComponent }  from './tour-buy.component';

const tourRoutes: Routes = [
  { path: 'tour/:id', component: TourBuyComponent }
];

export const tourRouting = RouterModule.forChild(tourRoutes);
