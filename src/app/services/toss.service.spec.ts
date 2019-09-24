import { TestBed } from '@angular/core/testing';

import { TossService } from './toss.service';

describe('TossService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TossService = TestBed.get(TossService);
    expect(service).toBeTruthy();
  });
});
