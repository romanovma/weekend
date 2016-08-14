import { Component, OnInit } from '@angular/core';

import { TourCollection} from '../shared/tour-collection';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.css']
})
export class StartComponent implements OnInit {
  trendingTours: TourCollection = {
    id: 'trending',
    title: 'Trending'
  };

  specialOfferTours: TourCollection = {
    id: 'special-offer',
    title: 'Special Offer'
  }

  constructor() {}

  ngOnInit() {
  }

}
