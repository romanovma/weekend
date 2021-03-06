import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: 'start.component.html',
  styleUrls: ['start.component.scss']
})
export class StartComponent implements OnInit {
  constTrue: boolean = true;

  closeTo: string = 'closeTo';
  closeToTitle: string = 'Приключения недалеко от вас';
  specialOfferTours: string = 'special-offer';

  loginVk: string = 'with VK';
  loginFacebook: string = 'with Facebook';
  loginMail: string = 'with email';
  loginCabinet: string = 'as operator';

  constructor() {}

  ngOnInit() {
  }

}
