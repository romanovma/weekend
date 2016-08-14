import { Component, OnInit, Input } from '@angular/core';

import { TourCollection} from '../shared/tour-collection';
import { Tour}           from '../shared/tour';


@Component({
  selector: 'app-tour-list',
  templateUrl: 'tour-list.component.html',
  styleUrls: ['tour-list.component.scss']
})
export class TourListComponent implements OnInit {
  @Input() collection: TourCollection;
  @Input() query;

  tours: Tour[];

  constructor() { }

  ngOnInit() {
  }

}
