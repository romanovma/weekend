import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-month-selector',
    templateUrl: './month-selector.component.html',
    styleUrls: ['./month-selector.component.scss']
})
export class MonthSelectorComponent implements OnInit {
    @Output() onMonthChanged = new EventEmitter<Date>();
    currentDate: Date;

    constructor() { }

    ngOnInit() {
        this.currentDate = new Date();
        this.onMonthChanged.emit(this.currentDate);
    }

    changeMonth(factor) {
        if (factor > 0 || !this.disabled('dummy', -1)) {
            this.currentDate.setMonth(this.currentDate.getMonth() + factor);
            this.onMonthChanged.emit(this.currentDate);
        }
    }

    disabled(selector, offset) {
        let date = new Date(this.currentDate.getTime());
        date.setMonth(date.getMonth() + offset);

        let dateYear = date.getFullYear();
        let dateMonth = date.getMonth();
        let currentYear = new Date().getFullYear();
        let currentMonth = new Date().getMonth();

        let disabled = dateYear < currentYear || dateYear === currentYear && dateMonth < currentMonth;

        if (disabled) {
            return selector + '--disabled'
        } else {
            return '';
        }
    }
}
