import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { Subscription }                 from 'rxjs/Subscription';

import { Tour } from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: 'tour-buy.component.html',
  styleUrls: ['tour-buy.component.scss']
})
export class TourBuyComponent implements OnInit, OnDestroy {
  tour: Tour;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.tourService.getTourById(id)
                      .subscribe(
                        tour => this.tour = tour,
                        error => this.errorMessage = <any>error);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
