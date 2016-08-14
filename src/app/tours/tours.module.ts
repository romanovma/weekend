import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { TourListComponent }    from './tour-list.component';
import { TourBuyComponent }     from './tour-buy.component';
import { TourAddComponent }     from './tour-add.component';

import { TourService }    from './tour.service';
import { tourRouting }    from './tour.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    tourRouting
  ],
  declarations: [
    TourListComponent,
    TourBuyComponent,
    TourAddComponent
  ],
  exports: [
    TourListComponent,
    TourAddComponent
  ],
  providers: [
    TourService
  ]
})

export class ToursModule {}
