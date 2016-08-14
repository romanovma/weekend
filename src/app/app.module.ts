import { BrowserModule }                from '@angular/platform-browser';
import { NgModule, ApplicationRef }     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule, disableDeprecatedForms, provideForms }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { MdToolbarModule }              from '@angular2-material/toolbar';

import { StartModule }                   from './start/start.module';

import { AppComponent }                 from './app.component';
import { CabinetComponent }             from './cabinet/cabinet.component';
import { SearchComponent }              from './search/search.component';
import { UserComponent }                from './user/user.component';
import { HelpComponent }                from './help/help.component';
import { TourFilterComponent } from './tours/tour-filter/tour-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent,
    SearchComponent,
    UserComponent,
    HelpComponent,
    TourFilterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    MdToolbarModule,
    StartModule
  ],
  providers: [
    appRoutingProviders,
    disableDeprecatedForms(),
    provideForms()
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
