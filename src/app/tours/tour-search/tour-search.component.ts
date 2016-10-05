import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';
import                               'rxjs/add/observable/of';
import                               'rxjs/add/operator/debounceTime';
import                               'rxjs/add/operator/distinctUntilChanged';
import                               'rxjs/add/operator/switchMap';
import                               'rxjs/add/operator/do';

import { TourService }          from '../tour.service';
import { Tour }                 from '../tour'


@Component({
  selector: 'app-tour-search',
  templateUrl: 'tour-search.component.html',
  styleUrls: ['tour-search.component.scss'],
  directives: [],
  providers: [
    TourService
  ]
})
export class TourSearchComponent implements OnInit {
  @Input() withLogo: boolean = false;

  errorMessage: string;
  staticTours: Tour[];
  highlightedTour: Tour;
  private searchTermStream = new Subject<string>();

  tours: Observable<Tour[]> = this.searchTermStream
                                  .debounceTime(400)
                                  .distinctUntilChanged()
                                  .switchMap(term => (term && term.length > 0) ? this.tourService.getToursByText(term): Observable.of([]))
                                  .do(tours => this.staticTours = tours);

  constructor(
    private router: Router,
    private tourService: TourService
  ) { }

  ngOnInit() {}

  search(term: string) {
    this.searchTermStream.next(term);
  }

  onArrowDown() {
    let i = this.staticTours.indexOf(this.highlightedTour);
    this.highlightedTour = i === this.staticTours.length - 1 ? this.staticTours[0] : this.staticTours[i + 1];
  }

  onArrowUp() {
    let i = this.staticTours.indexOf(this.highlightedTour);
    this.highlightedTour = i === 0 ? this.staticTours[this.staticTours.length - 1] : this.staticTours[i - 1];
  }

  onEnter() {
    this.navigate();
  }

  navigate() {
    if (this.highlightedTour) {
      this.router.navigate(['/tour', this.highlightedTour.id]);
    } else {
      this.router.navigate(['/search']);
    }
  }

  highlight(t: Tour) {
    this.highlightedTour = t;
  }

}
