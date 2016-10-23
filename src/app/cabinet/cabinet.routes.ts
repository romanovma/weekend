import { Routes, RouterModule } from '@angular/router';

import { CabinetComponent }  from './cabinet.component';
import { CabinetEventsComponent } from './cabinet-events/cabinet-events.component';
import { CabinetToursComponent } from './cabinet-tours/cabinet-tours.component';
import { CabinetPayoutComponent } from './cabinet-payout/cabinet-payout.component';

const cabinetRoutes: Routes = [
  {
    path: 'cabinet/:id',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'events', },
      { path: 'events', component: CabinetEventsComponent },
      { path: 'payout', component: CabinetToursComponent },
      { path: 'tours', component: CabinetPayoutComponent }
    ]
  },
];

export const cabinetRouting = RouterModule.forChild(cabinetRoutes);
