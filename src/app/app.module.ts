import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, XHRBackend }                   from '@angular/http';
import { InMemoryWebApiModule }     from 'angular-in-memory-web-api';
import { appData }                 from './in-memory-data.service';

import { routing, appRoutingProviders } from './app.routes';

// import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
// import { InMemoryDataService }               from './in-memory-data.service';

import { MdToolbarModule }              from '@angular2-material/toolbar';

import { StartModule }                  from './start/start.module';
import { UserModule }                   from './user/user.module';
import { CabinetModule }                from './cabinet/cabinet.module';

import { AppComponent }                 from './app.component';
import { HelpComponent }                from './help/help.component';
import { TourTestimonialComponent } from './tours/tour-testimonial/tour-testimonial.component';
import { TourCardComponent } from './tours/tour-card/tour-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    InMemoryWebApiModule.forRoot(appData),
    MdToolbarModule,
    StartModule,
    UserModule,
    CabinetModule
  ],
  providers: [
    appRoutingProviders
    // disableDeprecatedForms(),
    // provideForms()
    // { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
