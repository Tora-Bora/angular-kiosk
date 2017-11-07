import { TestBed, inject } from '@angular/core/testing';

import { FieldErrorMessageService } from './field-error-message.service';

describe('FieldErrorMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldErrorMessageService]
    });
  });

  it('should be created', inject([FieldErrorMessageService], (service: FieldErrorMessageService) => {
    expect(service).toBeTruthy();
  }));
});
