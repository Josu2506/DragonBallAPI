import { TestBed } from '@angular/core/testing';

import { DragonBallServiceService } from './dragon-ball-service.service';

describe('DragonBallServiceService', () => {
  let service: DragonBallServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonBallServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
