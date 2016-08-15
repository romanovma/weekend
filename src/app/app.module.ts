import { BrowserModule }                from '@angular/platform-browser';
import { NgModule, ApplicationRef }     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule, disableDeprecatedForms, provideForms }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { MdToolbarModule }              from '@angular2-material/toolbar';

import { StartModule }                  from './start/start.module';
import { UserModule }                   from './user/user.module';
import { CabinetModule }                from './cabinet/cabinet.module';

import { AppComponent }                 from './app.component';
import { HelpComponent }                from './help/help.component';


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
    MdToolbarModule,
    StartModule,
    UserModule,
    CabinetModule
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
