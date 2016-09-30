import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, disableDeprecatedForms, provideForms }                  from '@angular/forms';
import { HttpModule, XHRBackend }                   from '@angular/http';


import { MdInputModule }        from '@angular2-material/input';
import { MdListModule }         from '@angular2-material/list';
import { MdCardModule }         from '@angular2-material/card';
import { MdButtonModule }       from '@angular2-material/button';
import { MdRadioModule }       from '@angular2-material/radio';
import { MdSliderModule }       from '@angular2-material/slider';
import { MdCheckboxModule }       from '@angular2-material/checkbox';


import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { TourListComponent }    from './tour-list/tour-list.component';
import { TourBuyComponent }     from './tour-buy/tour-buy.component';
import { TourAddComponent }     from './tour-add/tour-add.component';
import { TourSearchComponent }  from './tour-search/tour-search.component';
import { TourFilterComponent }  from './tour-filter/tour-filter.component';



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
    MdButtonModule,
    MdRadioModule,
    MdSliderModule,
    MdCheckboxModule
  ],
  declarations: [
    TourListComponent,
    TourBuyComponent,
    TourAddComponent,
    TourSearchComponent,
    TourFilterComponent
  ],
  exports: [
    TourListComponent,
    TourAddComponent,
    TourSearchComponent,
    TourFilterComponent
  ],
  providers: [
    TourService,
    disableDeprecatedForms(),
    provideForms(),
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ]
})

export class ToursModule {}
