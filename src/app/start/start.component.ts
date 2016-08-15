import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.scss']
})
export class StartComponent implements OnInit {
  constTrue: boolean = true;

  trendingTours: string = 'trending';
  specialOfferTours: string = 'special-offer';

  loginVk: string = 'with VK';
  loginFacebook: string = 'with Facebook';
  loginMail: string = 'with email';
  loginCabinet: string = 'as operator';

  constructor() {}

  ngOnInit() {
  }

}
