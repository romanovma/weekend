import { Routes, RouterModule } from '@angular/router';

import { CabinetComponent }  from './cabinet.component';
import { CabinetEventsComponent } from './cabinet-events/cabinet-events.component';
import { CabinetToursComponent } from './cabinet-tours/cabinet-tours.component';
import { CabinetPayoutComponent } from './cabinet-payout/cabinet-payout.component';

import { TourAddComponent } from '../tours/tour-add/tour-add.component';



const cabinetRoutes: Routes = [
  {
    path: 'cabinet',
    component: CabinetComponent,
    children: [
      {
        path: '',
        redirectTo: 'events'
      },
      {
        path: 'events',
        component: CabinetEventsComponent
      },
      {
        path: 'tours',
        component: CabinetToursComponent,
      },
      {
        path: 'payout',
        component: CabinetPayoutComponent
      },
      {
        path: 'tours/add-tour/:id',
        component: TourAddComponent
      }
    ]
  },
];

export const cabinetRouting = RouterModule.forChild(cabinetRoutes);
