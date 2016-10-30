import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
  // editLabels = {
  //   important: [],
  //   included
  // }

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.tourService.getTourById(id)
                        .subscribe(
                          tour => {
                            if (tour) {
                              this.tour = tour;
                              this.updateActiveMedia(tour);
                            } else {
                              this.tour = new Tour();
                            }
                          },
                          error => this.errorMessage = <any>error
                        );
      } else {
        this.navigated = false;
        this.tour = new Tour();
      }
    });
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
