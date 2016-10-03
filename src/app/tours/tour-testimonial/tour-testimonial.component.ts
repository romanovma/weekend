import { Component, OnInit } from '@angular/core';
import { TourService }          from '../tour.service';
import { Tour }                 from '../tour';



@Component({
  selector: 'app-tour-testimonial',
  templateUrl: 'tour-testimonial.component.html',
  styleUrls: ['tour-testimonial.component.scss']
})
export class TourTestimonialComponent implements OnInit {
  testimonial: boolean = true;
  errorMessage;
  collectionId: string = "testimonials";
  tours: Tour[];


  constructor(
    private tourService: TourService) { }

    ngOnInit() {
      this.getTours();
    }

    getTours() {
      if (this.collectionId) {
        this.tourService.getToursByCollection(this.collectionId)
                        .subscribe(
                          tours => this.tours = tours,
                          error => this.errorMessage = <any>error);
      }
    }


}
