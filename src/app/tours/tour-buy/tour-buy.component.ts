import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import * as moment from 'moment';

import { Subscription }                 from 'rxjs/Subscription';

import { Tour } from '../tour';
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
  date: string;

  withLogo: boolean = true;
  tour: Tour;
  errorMessage: string;
  private sub: Subscription;

  myDatePickerOptions = {
    todayBtnTxt: 'Сегодня',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '34px',
    width: '100%',
    inline: true,
    disableUntil: {year: 3016, month: 8, day: 10},
    selectionTxtFontSize: '26px'
  }

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
                          this.date = moment(new Date(tour.dates)).format('YYYY-MM-DD');
                        },
                        error => this.errorMessage = <any>error
                      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
