/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TourComponent } from './tour.component';

describe('Component: Tour', () => {
  it('should create an instance', () => {
    let component = new TourComponent();
    expect(component).toBeTruthy();
  });
});
