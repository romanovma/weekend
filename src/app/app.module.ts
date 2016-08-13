import { BrowserModule }                from '@angular/platform-browser';
import { NgModule, ApplicationRef }     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { MdCardModule }                 from '@angular2-material/card';
import { MdButtonModule }               from '@angular2-material/button';
import { MdToolbarModule }              from '@angular2-material/toolbar';

import { AppComponent }                 from './app.component';
import { AddTourComponent }             from './add-tour/add-tour.component';
import { CabinetComponent }             from './cabinet/cabinet.component';
import { LoginComponent }               from './login/login.component';
import { SearchComponent }              from './search/search.component';
import { StartComponent }               from './start/start.component';
import { TourComponent }                from './tour/tour.component';
import { UserComponent }                from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTourComponent,
    CabinetComponent,
    LoginComponent,
    SearchComponent,
    StartComponent,
    TourComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
