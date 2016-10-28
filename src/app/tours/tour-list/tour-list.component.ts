import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { TourCollection }       from '../tour-collection';
import { Tour }                 from '../tour';
import { TourQuery }            from '../tour-query';
import { TourService }          from '../tour.service';


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
  @Input() collectionId: string;
  @Input() grid: boolean = false;
  @Input() cabinet: boolean = false;
  @Input() withCity: boolean = false;
  @Input() maxPrice: number;
  @Input() date: Date;
  @Input() duration: number;

  errorMessage;
  tours: Tour[];
  query: TourQuery;
  addingTour = false;
  error: any;

  constructor(
    private tourService: TourService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getTours();
  }

  ngOnChanges() {
      this.tourService.getToursByQuery(this.query)
                      .subscribe(
                        tours => this.tours = tours,
                        error => this.errorMessage = <any>error);
  }

  getTours() {
    if (this.collectionId) {
      this.tourService.getToursByCollection(this.collectionId)
                      .subscribe(
                        tours => this.tours = tours,
                        error => this.errorMessage = <any>error);
    }
  }

  onSelect(id: number) {
    if (id) {
      this.router.navigate(['/tour', id]);
    } else {
      console.error('Cannot navigate to tour as id is not specified');
    }
  }

  addTour() {
    this.router.navigate(['./add-tour', 999], { relativeTo: this.route });
    this.addingTour = true;
    // this.selectedTour = null;
  }

  close(savedTour: Tour) {
    this.addingTour = false;
    if (savedTour) { this.getTours(); }
  }

}
