import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, disableDeprecatedForms, provideForms }                  from '@angular/forms';

import { MdInputModule }        from '@angular2-material/input';
import { MdListModule }         from '@angular2-material/list';
import { MdCardModule }         from '@angular2-material/card';
import { MdButtonModule }       from '@angular2-material/button';


import { TourListComponent }    from './tour-list/tour-list.component';
import { TourBuyComponent }     from './tour-buy/tour-buy.component';
import { TourAddComponent }     from './tour-add/tour-add.component';
import { TourSearchComponent }  from './tour-search/tour-search.component';


import { TourService }    from './tour.service';
import { tourRouting }    from './tour.routes';

@NgModule({
  imports: [
    CommonModule,
    tourRouting,
    FormsModule,
    MdInputModule,
    MdListModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [
    TourListComponent,
    TourBuyComponent,
    TourAddComponent,
    TourSearchComponent
  ],
  exports: [
    TourListComponent,
    TourAddComponent,
    TourSearchComponent
  ],
  providers: [
    TourService,
    disableDeprecatedForms(),
    provideForms()
  ]
})

export class ToursModule {}
