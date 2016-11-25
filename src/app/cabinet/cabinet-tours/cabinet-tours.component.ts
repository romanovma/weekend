import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';


import { TourService }          from '../../tours/tour.service';
import { Tour }                 from '../../tours/tour';

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

@Component({
  selector: 'app-cabinet-tours',
  templateUrl: './cabinet-tours.component.html',
  styleUrls: ['./cabinet-tours.component.scss']
})
export class CabinetToursComponent implements OnInit {
  tours: Observable<Tour[]>;

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tours = this.tourService.getToursByCabinet();
  }

}
