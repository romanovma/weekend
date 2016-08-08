/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CabinetComponent } from './cabinet.component';

describe('Component: Cabinet', () => {
  it('should create an instance', () => {
    let component = new CabinetComponent();
    expect(component).toBeTruthy();
  });
});
