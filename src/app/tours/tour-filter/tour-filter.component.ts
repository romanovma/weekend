import { Component, OnInit }    from '@angular/core';

import { TourQuery }            from '../tour-query';


@Component({
  selector: 'app-tour-filter',
  templateUrl: 'tour-filter.component.html',
  styleUrls: ['tour-filter.component.scss']
})
export class TourFilterComponent implements OnInit {
  queryModel: TourQuery = new TourQuery();

  myDatePickerOptions = {
    todayBtnTxt: 'Сегодня',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '100%',
    inline: true,
    disableUntil: {year: 2016, month: 8, day: 10},
    selectionTxtFontSize: '26px'
  }

  constructor() {}

  ngOnInit() {}

  onDateChanged(event:any) {
      this.queryModel.dates = event.epoc * 1000;
  }

}
