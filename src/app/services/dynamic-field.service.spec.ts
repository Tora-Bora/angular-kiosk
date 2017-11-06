import { TestBed, inject } from '@angular/core/testing';

import { DynamicFieldService } from './dynamic-field.service';

describe('DynamicFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicFieldService]
    });
  });

  it('should be created', inject([DynamicFieldService], (service: DynamicFieldService) => {
    expect(service).toBeTruthy();
  }));
});
