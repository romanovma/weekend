import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { TourCollection }       from '../tour-collection';
import { Tour }                 from '../tour';
import { TourQuery }            from '../tour-query';
import { TourService }          from '../tour.service';

import { Observable }           from 'rxjs/Observable';


@Component({
  selector: 'app-tour-list',
  templateUrl: 'tour-list.component.html',
  styleUrls: ['tour-list.component.scss'],
  providers: [
    TourService
  ]
  // directives:[
  //   NgClass
  // ]
})
export class TourListComponent implements OnInit, OnChanges {
  // @Input() grid: boolean = false;
  // @Input() cabinet: boolean = false;
  @Input() withCity: boolean = false;
  // @Input() maxPrice: number;
  // @Input() date: Date;
  // @Input() duration: number;
  @Input() editMode: boolean = false;

  @Input() collectionId: string;
  // @Input() inputTours: Tour[];
  @Input() tours: Observable<Tour[]>;



  query: TourQuery;
  // addingTour = false;
  error: any;
  errorMessage;

  constructor(
    private tourService: TourService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    // this.getTours();
  }

  ngOnChanges() {
      // this.tourService.getToursByQuery(this.query)
      //                 .subscribe(
      //                   tours => this.tours = tours,
      //                   error => this.errorMessage = <any>error);
  }

  getTours() {
    // if (this.collectionId) {
    //   this.tourService.getToursByCollection(this.collectionId)
    //                   .subscribe(
    //                     tours => {
    //                       this.tours = tours;
    //                       console.log(tours);
    //                     },
    //                     error => this.errorMessage = <any>error);
    // }
  }

  onSelect(id: number) {
    if (id && this.editMode) {
      this.router.navigate(['./add-tour', id], { relativeTo: this.route });
    } else if (id) {
      this.router.navigate(['/tour', id]);
    } else {
      console.error('Cannot navigate to tour as id is not specified');
    }
  }

  addTour() {
    this.router.navigate(['./add-tour', 0], { relativeTo: this.route });
    // this.addingTour = true;
    // this.selectedTour = null;
  }

  // close(savedTour: Tour) {
  //   this.addingTour = false;
  //   if (savedTour) { this.getTours(); }
  // }

}
