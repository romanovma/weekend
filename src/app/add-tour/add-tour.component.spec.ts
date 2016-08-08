/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { AddTourComponent } from './add-tour.component';

describe('Component: AddTour', () => {
  it('should create an instance', () => {
    let component = new AddTourComponent();
    expect(component).toBeTruthy();
  });
});
