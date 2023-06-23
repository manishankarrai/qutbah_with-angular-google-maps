import { TestBed } from '@angular/core/testing';

import { AlllocationsService } from './alllocations.service';

describe('AlllocationsService', () => {
  let service: AlllocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlllocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
