import { BrowserModule }                from '@angular/platform-browser';
import { NgModule, ApplicationRef }     from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';

import { routing, appRoutingProviders } from './app.routes';

import { MdCardModule }                 from '@angular2-material/card';
import { MdButtonModule }               from '@angular2-material/button';
import { MdToolbarModule }              from '@angular2-material/toolbar';

import { StartModule }                   from './start/start.module';

import { AppComponent }                 from './app.component';
import { CabinetComponent }             from './cabinet/cabinet.component';
import { LoginComponent }               from './login/login.component';
import { SearchComponent }              from './search/search.component';
import { UserComponent }                from './user/user.component';
import { HelpComponent }                from './help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent,
    LoginComponent,
    SearchComponent,
    UserComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    StartModule
  ],
  providers: [
    appRoutingProviders
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}
