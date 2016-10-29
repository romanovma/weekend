import { Component, OnInit } from '@angular/core';

export class Card {
  number: number;
  name: string;
}

@Component({
  selector: 'app-cabinet-payout',
  templateUrl: './cabinet-payout.component.html',
  styleUrls: ['./cabinet-payout.component.scss']
})
export class CabinetPayoutComponent implements OnInit {
  card: Card = {
    number: 4444444444444444,
    name: 'Kittiporn Tirasat'
  };
  editMode: boolean = false;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  toggleEditCard(val) {
    this.editMode = val;
  }

}
