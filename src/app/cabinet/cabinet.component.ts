import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';


import { Subscription }                 from 'rxjs/Subscription';

import { Cabinet }        from './cabinet';
import { CabinetService } from './cabinet.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: 'cabinet.component.html',
  styleUrls: ['cabinet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CabinetComponent implements OnInit, OnDestroy {
  collection: string = "my";
  grid: boolean = true;

  cabinet: Cabinet;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cabinetService: CabinetService) {}

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   let id = +params['id'];
    //   this.cabinetService.getCabinetById(id)
    //                   .subscribe(
    //                     cabinet => this.cabinet = cabinet,
    //                     error => this.errorMessage = <any>error);
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  addTour() {

  }

}
