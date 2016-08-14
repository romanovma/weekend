import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ToursModule }    from '../tours/tours.module';

import { StartComponent } from './start.component';

import { startRouting }    from './start.routes';


@NgModule({
  imports: [
    CommonModule,
    ToursModule,
    startRouting
  ],
  declarations: [
    StartComponent
  ],
  exports: [
    StartComponent
  ],
  providers: []
})

export class StartModule {}
