import { TestBed } from '@angular/core/testing';

import { LockerService } from './locker-service.service';

describe('LockerServiceService', () => {
  let service: LockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
