/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TourBuyComponent } from './tour-buy.component';

describe('Component: Tour', () => {
  it('should create an instance', () => {
    let component = new TourBuyComponent();
    expect(component).toBeTruthy();
  });
});
