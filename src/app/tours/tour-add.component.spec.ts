/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TourAddComponent } from './tour-add.component';

describe('Component: AddTour', () => {
  it('should create an instance', () => {
    let component = new TourAddComponent();
    expect(component).toBeTruthy();
  });
});
