import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import                         'rxjs/add/operator/toPromise';


import { Tour }        from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour-add',
  templateUrl: 'tour-add.component.html',
  styleUrls: ['tour-add.component.scss']
})
export class TourAddComponent implements OnInit {
  @Input() tour: Tour;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      // if (params['id'] !== undefined) {
      //   let id = +params['id'];
      //   this.navigated = true;
      //   this.tourService.getTourById(id)
      //       .toPromise()
      //       .then(tour => this.tour = tour);
      // } else {
        this.navigated = false;
        this.tour = new Tour();
      // }
    });
  }

  save() {
    this.tourService
        .save(this.tour)
        .then(tour => {
          this.tour = tour; // saved tour, w/ id if new
          this.goBack(tour);
        })
        .catch(error => {
          this.error = error
        }); // TODO: Display error message
  }

  goBack(savedTour: Tour = null) {
    this.close.emit(savedTour);
    if (this.navigated) { window.history.back(); }
  }

}
