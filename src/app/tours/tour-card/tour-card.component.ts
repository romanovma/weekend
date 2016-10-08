import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Tour }                 from '../tour';

@Component({
  selector: 'app-tour-card',
  templateUrl: 'tour-card.component.html',
  styleUrls: ['tour-card.component.scss']
})
export class TourCardComponent implements OnInit {
  @Input() tour: Tour;
  @Input() withCity: boolean = false;
  @Input() testimonial: boolean = false;
  ratingArr: number[] = [0,0,0,0,0];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(id: number) {
    if (id) {
      this.router.navigate(['/tour', id]);
    } else {
      console.error('Cannot navigate to tour as id is not specified');
    }
  }

  //TODO: move to service?
  setMovementTypeClass(type) {
    return {
      car: type === 'car',
      walk: type === 'walk',
      bycicle: type === 'bycicle'
    }
  }

  //TODO: change to pipe
  translateType(value) {
    switch (value) {
    case "car":
      return 'На авто';
    case "walk":
      return 'Пешком';
    case "bycicle":
      return 'Велосипед';
    default:
      return '';
    }
  }

}
