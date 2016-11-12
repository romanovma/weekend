import { Component, OnInit }    from '@angular/core';

import { TourQuery }            from '../tour-query';
import { TourService }          from '../tour.service';
import { Tour }                 from '../tour'

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';
import                               'rxjs/add/observable/of';
import                               'rxjs/add/operator/debounceTime';
import                               'rxjs/add/operator/distinctUntilChanged';
import                               'rxjs/add/operator/switchMap';
import                               'rxjs/add/operator/do';


@Component({
    selector: 'app-tour-filter',
    templateUrl: 'tour-filter.component.html',
    styleUrls: ['tour-filter.component.scss']
})
export class TourFilterComponent implements OnInit {
    query: TourQuery = new TourQuery();
    private searchQueryStream = new Subject<TourQuery>();

    tours: Observable<Tour[]>;

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

    constructor(
        private tourService: TourService
    ) {}

    ngOnInit() {
        this.tours = this.searchQueryStream
                         .debounceTime(400)
                         .distinctUntilChanged(
                           (a, b) => {
                             return a === b
                           },
                           x => JSON.stringify(x))
                         .do(query => console.log(query))
                         .switchMap(query => this.tourService.getToursByQuery(query))
    }

    onDateChanged(event:any) {
        // this.query.dates = event.epoc * 1000;
    }

    search() {
        this.searchQueryStream.next(this.query);
    }
}
