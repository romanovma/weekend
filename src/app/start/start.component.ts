import { Component, OnInit } from '@angular/core';

import { TourCollection} from '../tours/tour-collection';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.scss']
})
export class StartComponent implements OnInit {
  trendingTours: string = 'trending';
  specialOfferTours: string = 'special-offer';

  loginVk: string = 'VK';
  loginFacebook: string = 'Facebook';
  loginMail: string = 'email';

  constructor() {}

  ngOnInit() {
  }

}
