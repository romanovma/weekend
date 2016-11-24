import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import * as moment from 'moment';

import { Subscription }                 from 'rxjs/Subscription';

import { Tour } from '../tour';
import { Event } from '../event';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: 'tour-buy.component.html',
  styleUrls: ['tour-buy.component.scss']
})
export class TourBuyComponent implements OnInit, OnDestroy {
  error: any;
  activeMediaType: string = 'video';
  activeMedia: string;
  userId: number = 1;
  userName = 'Анна Антоновна';
  userPhone = '8 926 22 22 222';
  event: Event = new Event();
  count: number = 1;
  cabinetId: number = 1;
  guidePhone = '8 926 11 11 111';

  months: Date[] = [];

  // dateSelected: number;

  withLogo: boolean = true;
  tour: Tour;
  errorMessage: string;
  private sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService) {
        let curMonth = new Date();
        [0, 1].map(i => {
            let date = new Date(curMonth);
            this.months.push(new Date(date.setMonth(date.getMonth() + i)));
        });
    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.tourService.getTourById(id)
                      .subscribe(
                        tour => {
                          this.tour = tour[0];
                          this.updateActiveMedia(tour[0]);
                          this.updateEvent();
                        },
                        error => this.errorMessage = <any>error
                      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  updateEvent() {
    this.event.code = 999999;
    this.event.userId = this.userId;
    this.event.userName = this.userName;
    this.event.count = this.count;
    this.event.userPhone = this.userPhone;
    this.event.tourId = this.tour._id;
    this.event.tourTitle = this.tour.title;
    this.event.cabinetId = this.cabinetId;
    this.event.guidePhone = this.guidePhone;
  }

  order() {
    this.tourService
        .postEvent(this.event)
        .then(event => {
          this.event = event; // saved event, w/ id if new
          this.router.navigate(['/me', this.userId]);
        })
        .catch(error => {
          this.error = error
        }); // TODO: Display error message
  }

  updateActiveMedia(tour: Tour) {
    if (tour.video.length) {
      this.activeMedia = tour.video[0];
    } else if (tour.photo.length) {
      this.activeMedia = tour.photo[0];
      this.activeMediaType = 'photo';
    }
  }

  activateMedia(type: string, media: string) {
    this.activeMediaType = type;
    this.activeMedia = media;
  }

  //TODO: move to service?
  setMovementTypeClass(type) {
    return {
      car: type === 'car',
      walk: type === 'walk',
      bycicle: type === 'bycicle'
    }
  }

  //TODO: change to pipe
  translateType(value) {
    switch (value) {
    case "car":
      return 'На авто';
    case "walk":
      return 'Пешком';
    case "bycicle":
      return 'Велосипед';
    default:
      return '';
    }
  }

  getCellsByMonth(month, where) {
      let numDays = 0;
      let day;
      switch (where) {
          case 'before':
              day = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
              numDays = (day === 0) ? 6 : day - 1;
              break;
          case 'after':
              day = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDay();
              numDays = (day === 0) ? 0 : 7 - day;
              break;
          default:
              let firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
              let days = [];
              let monthNum = firstDay.getMonth();
              while (firstDay.getMonth() === monthNum) {
                  numDays++;
                  firstDay.setDate(firstDay.getDate() + 1);
              }
      }

      return new Array(numDays).fill(1);
  }

  isDateAvailable(month, dayNum) {
      let epoch = new Date(month.getFullYear(), month.getMonth(), dayNum).setHours(12, 0, 0, 0);
      let index = this.tour.dates.indexOf(epoch);
      if (index > -1) {
          return true;
      } else {
          return false;
      }
  }

  isDateSelected(month, dayNum) {
      let epoch = new Date(month.getFullYear(), month.getMonth(), dayNum).setHours(12, 0, 0, 0);
      if (epoch === this.event.date) {
          return true;
      } else {
          return false;
      }
  }

  selectDate(month, dayNum) {
      let epoch = new Date(month.getFullYear(), month.getMonth(), dayNum).setHours(12, 0, 0, 0);
      if (this.tour.dates.indexOf(epoch) > -1 && this.event.date !== epoch) {
          this.event.date = epoch;
      } else {
          this.event.date = 0;
      }

  }
}
