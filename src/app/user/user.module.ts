import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ToursModule }    from '../tours/tours.module';

import { UserComponent } from './user.component';
import { UserService }   from './user.service';

import { userRouting }    from './user.routes';


@NgModule({
  imports: [
    CommonModule,
    ToursModule,
    userRouting
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})

export class UserModule {}
