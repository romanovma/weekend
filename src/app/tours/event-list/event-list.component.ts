import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

import { Event }                 from '../event';
import { EventQuery }            from '../event-query';
import { TourService }          from '../tour.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [
    TourService
  ]
})
export class EventListComponent implements OnInit {
  @Input() cabinet: boolean = false;
  @Input() userId: number;
  @Input() cabinetId: number;
  @Input() period: string;

  errorMessage;
  events: Event[];
  query: EventQuery = {
    period: '',
    userId: 0,
    cabinetId: 0
  };
  error: any;

  constructor(
    private tourService: TourService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.query.userId = this.userId;
    this.query.cabinetId = this.cabinetId;
    this.query.period = this.period;
    this.getEvents();
  }

  getEvents() {
      if (!this.cabinet) {
          this.tourService.getEventsByQueryUser(this.query)
                          .subscribe(
                              events => this.events = events,
                              error => this.errorMessage = <any>error
                          );
      } else {
          this.tourService.getEventsByQueryGuide(this.query)
                          .subscribe(
                              events => this.events = events,
                              error => this.errorMessage = <any>error
                          );
      }

  }

  onSelect(id: number) {
    if (id) {
      this.router.navigate(['/tour', id]);
    } else {
      console.error('Cannot navigate to tour as id is not specified');
    }
  }
}
