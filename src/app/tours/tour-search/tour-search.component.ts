import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FormControl, REACTIVE_FORM_DIRECTIVES }        from '@angular/forms';

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
    // if (this.highlightFirst()) {
      this.navigate();
    // }
  }

  // onBlur() {
  //   this.highlightFirst();
  // }

  // highlightFirst() {
  //   if (this.highlightedTour && this.highlightedTour.id) {
  //     return true;
  //   }
  //
  //   if (!this.highlightedTour && this.staticTours && this.staticTours.length) {
  //     this.highlightedTour = this.staticTours[0];
  //     return true;
  //   }
  //
  //   this.errorMessage = 'None of Tours are highlighted';
  //   console.info(this.errorMessage);
  //   return false;
  // }

  navigate() {
    // if (this.highlightedTour) {
      //return this.router.navigate(['/Tour', this.highlightedTour.id]);
      console.info('navigate');
    // }

    // if (this.tourName && this.staticTours && this.staticTours.length) {
    //   let Tour = this.staticTours.filter(st => st.name.toLowerCase() === this.tourName.toLowerCase())[0];
    //   if (Tour) {
    //     return this.router.navigate(['/Tour', Tour.id]);
    //   }
    // }
    //
    // if (!this.tourName && !this.highlightedTour) {
    //   this.errorMessage = 'Please input the Tour name';
    //   console.info(this.errorMessage);
    // } else {
    //   this.errorMessage = 'There is no Tour with such name. You can see the full list of Tours here.';
    //   console.info(this.errorMessage);
    // }
  }

  highlight(t: Tour) {
    this.highlightedTour = t;
  }

}
