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
  // date: string;
  selectedDate: number;
  userId: number = 1;
  userName = 'Анна Антоновна';
  userPhone = '8 926 22 22 222';
  event: Event = new Event();
  count: number = 1;
  cabinetId: number = 1;
  guidePhone = '8 926 11 11 111';

  withLogo: boolean = true;
  tour: Tour;
  errorMessage: string;
  private sub: Subscription;

  // myDatePickerOptions = {
  //   todayBtnTxt: 'Сегодня',
  //   dateFormat: 'yyyy-mm-dd',
  //   firstDayOfWeek: 'mo',
  //   sunHighlight: true,
  //   height: '34px',
  //   width: '100%',
  //   inline: true,
  //   disableUntil: {year: 3016, month: 8, day: 10},
  //   selectionTxtFontSize: '26px'
  // }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tourService: TourService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.tourService.getTourById(id)
                      .subscribe(
                        tour => {
                          this.tour = tour;
                          this.updateActiveMedia(tour);
                          // this.date = moment(new Date(tour.dates)).format('YYYY-MM-DD');
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
    this.event.tourId = this.tour.id;
    this.event.tourTitle = this.tour.title;
    this.event.date = this.selectedDate;
    this.event.cabinetId = this.cabinetId;
    this.event.guidePhone = this.guidePhone;
  }

  order() {
    this.tourService
        .postEvent(this.event)
        .then(event => {
          this.event = event; // saved tour, w/ id if new
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

  onDateChanged(event:any) {

  }
}
