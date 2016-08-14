import { Component, OnInit } from '@angular/core';

import { TourCollection} from '../tours/tour-collection';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.scss']
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
