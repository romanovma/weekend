import { Component, OnInit }    from '@angular/core';

import { TourQuery }            from '../tour-query';


@Component({
  selector: 'app-tour-filter',
  templateUrl: 'tour-filter.component.html',
  styleUrls: ['tour-filter.component.scss']
})
export class TourFilterComponent implements OnInit {
  queryModel: TourQuery = new TourQuery();

  constructor() {}

  ngOnInit() {}

}
