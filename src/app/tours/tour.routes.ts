import { Routes, RouterModule } from '@angular/router';

import { TourBuyComponent }  from './tour-buy/tour-buy.component';
import { TourFilterComponent }  from './tour-filter/tour-filter.component';

const tourRoutes: Routes = [
  { path: 'search', component: TourFilterComponent },
  { path: 'tour/:id', component: TourBuyComponent }
];

export const tourRouting = RouterModule.forChild(tourRoutes);
