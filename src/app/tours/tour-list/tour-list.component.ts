import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }           from 'rxjs/Observable';

import { TourCollection}        from '../tour-collection';
import { Tour}                  from '../tour';

import { TourService }          from '../tour.service';


@Component({
  selector: 'app-tour-list',
  templateUrl: 'tour-list.component.html',
  styleUrls: ['tour-list.component.scss'],
  providers: [
    TourService
  ]
})
export class TourListComponent implements OnInit {
  @Input() collection: TourCollection;
  @Input() query;

  errorMessage;
  tours: Tour[];

  constructor(
    private tourService: TourService,
    private router: Router) {}

  ngOnInit() {
    if (this.collection) {
      this.tourService.getToursByCollection(this.collection.id)
                      .subscribe(
                        tours => this.tours = tours,
                        error => this.errorMessage = <any>error);
    }
  }

  onSelect() {

  }

}
