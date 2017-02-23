/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentproviderService } from './contentprovider.service';

describe('ContentproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentproviderService]
    });
  });

  it('should ...', inject([ContentproviderService], (service: ContentproviderService) => {
    expect(service).toBeTruthy();
  }));
});
