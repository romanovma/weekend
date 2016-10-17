import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ToursModule }    from '../tours/tours.module';

import { CabinetComponent } from './cabinet.component';
import { CabinetService }   from './cabinet.service';


import { cabinetRouting }    from './cabinet.routes';


@NgModule({
  imports: [
    CommonModule,
    ToursModule,
    cabinetRouting
  ],
  declarations: [
    CabinetComponent
  ],
  providers: [
    CabinetService
  ]
})

export class CabinetModule {}
