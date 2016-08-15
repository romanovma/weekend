import { Routes, RouterModule } from '@angular/router';

import { CabinetComponent }  from './cabinet.component';

const cabinetRoutes: Routes = [
  { path: 'cabinet/:id', component: CabinetComponent }
];

export const cabinetRouting = RouterModule.forChild(cabinetRoutes);
