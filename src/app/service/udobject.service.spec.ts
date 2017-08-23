import { TestBed, inject } from '@angular/core/testing';

import { UdobjectService } from './udobject.service';

describe('UdobjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UdobjectService]
    });
  });

  it('should be created', inject([UdobjectService], (service: UdobjectService) => {
    expect(service).toBeTruthy();
  }));
});
