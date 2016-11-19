import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';

import                         'rxjs/add/operator/toPromise';


import { Tour }        from '../tour';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour-add',
  templateUrl: 'tour-add.component.html',
  styleUrls: ['tour-add.component.scss']
})
export class TourAddComponent implements OnInit {
  @Input() tour: Tour;
  @Output() close = new EventEmitter();

  months: Date[] = [];
  error: any;
  errorMessage: string;
  navigated = false; // true if navigated here
  activeMediaType: string = 'video';
  activeMedia: string;
  options = {
    movementType: ['car', 'walk', 'bycicle']
  };
  optionsShown = {
    movementType: false
  };

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute) {
        let curMonth = new Date();
        [0, 1, 2, 3].map(i => {
            let date = new Date(curMonth);
            this.months.push(new Date(date.setMonth(date.getMonth() + i)));
        });
    }

  ngOnInit() {
      this.route.params.forEach((params: Params) => {
          if (params['id'] !== undefined) {
              let id = +params['id'];
              this.navigated = true;
              this.tourService.getTourById(id)
                              .subscribe(
                                tour => this.initTour(tour),
                                error => this.errorMessage = <any>error
                              );
          } else {
              this.navigated = false;
          }
      });
  }

  initTour(tour:Tour) {
    if (tour) {
      this.tour = tour;
      this.updateActiveMedia(tour);
      console.log(this.tour.dates);
    } else {
      let today = new Date();
      this.tour = new Tour();
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

  toggleDate(month, dayNum) {
      let epoch = new Date(month.getFullYear(), month.getMonth(), dayNum).setHours(12, 0, 0, 0);
      let index = this.tour.dates.indexOf(epoch);
      if (this.isDateAvailable(month, dayNum)) {
          this.tour.dates.splice(index, 1);
      } else {
          this.tour.dates.push(epoch);
      }
  }

  save() {
    this.tourService
        .save(this.tour)
        .then(tour => {
            this.tour = tour; // saved tour, w/ id if new
            this.goBack(tour);
        })
        .catch(error => {
            this.error = error
        }); // TODO: Display error message
  }

  delete() {
    this.tourService
        .delete(this.tour)
        .then(tour => {
          this.goBack();
        })
        .catch(error => {
          this.error = error
        }); // TODO: Display error message
  }

  goBack(savedTour: Tour = null) {
    this.close.emit(savedTour);
    if (this.navigated) { window.history.back(); }
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

  uploadPhoto() {

  }

  uploadVideo() {

  }

  showOptions(type: string) {
    this.optionsShown[type] = true;
  }

  selectOption(type: string, option: string, event) {
    this.optionsShown[type] = false;
    this.tour[type] = option;
    event.stopPropagation();
  }

  // updateEditLabels(tour) {
  //   tour.important.map(() => {
  //     this.editLabels.important.push(false);
  //   });
  // }

  addLabel(type) {
    this.tour[type].push('');
  }

}
