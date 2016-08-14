/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { TourService } from './tour.service';

describe('Service: Tour', () => {
  beforeEach(() => {
    addProviders([TourService]);
  });

  it('should ...',
    inject([TourService],
      (service: TourService) => {
        expect(service).toBeTruthy();
      }));
});
