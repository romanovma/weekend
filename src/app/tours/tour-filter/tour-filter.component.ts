import { Component, OnInit, OnChanges, SimpleChanges }    from '@angular/core';



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
    searchQueryStream = new Subject<TourQuery>();
    range: number[] = [3, 5];
    days: number[];

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

    ngOnChanges(changes: SimpleChanges) {
    }

    isDaySelected(i) {
        if (this.range && i >= this.range[0] && i <= this.range[1]) {
            return 'tour-filter__filter__date__day--selected';
        } else {
            return '';
        }
    }

    onMonthChanged(date) {
        let numDays = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

        this.days = Array.from(Array(numDays)).map((e,i) => i+1);
    }

    // onDateChanged(event:any) {
    //     // this.query.dates = event.epoc * 1000;
    // }

    onDaysChanged(days: any) {
    }

    onLabelsAllChanged(event) {
        if (event) {
            this.query.car = false;
            this.query.bycicle = false;
            this.query.walk = false;
            this.query.smallPeriod = false;
            this.query.middlePeriod = false;
            this.query.largPeriod = false;
            this.query.xlargePeriod = false;
        }

        this.searchQueryStream.next(this.query);
    }

    onLabelsOtherChanged(event) {
        if (event) {
            this.query.all = false;
        }

        this.searchQueryStream.next(this.query);
    }

    search() {
        this.searchQueryStream.next(this.query);
    }
}
