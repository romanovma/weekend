import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ToursModule }    from '../tours/tours.module';

import { CabinetComponent } from './cabinet.component';
import { CabinetService }   from './cabinet.service';


import { cabinetRouting }    from './cabinet.routes';
import { CabinetEventsComponent } from './cabinet-events/cabinet-events.component';
import { CabinetToursComponent } from './cabinet-tours/cabinet-tours.component';
import { CabinetPayoutComponent } from './cabinet-payout/cabinet-payout.component';


@NgModule({
  imports: [
    CommonModule,
    ToursModule,
    cabinetRouting
  ],
  declarations: [
    CabinetComponent,
    CabinetEventsComponent,
    CabinetToursComponent,
    CabinetPayoutComponent
  ],
  providers: [
    CabinetService
  ]
})

export class CabinetModule {}
