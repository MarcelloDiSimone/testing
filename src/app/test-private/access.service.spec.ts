import { TestBed } from '@angular/core/testing';

import { AccessService } from './access.service';

describe('AccessService', () => {
  let service: AccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return pubVar divided by priVar', () => {
    expect(service.doSomething()).toEqual(10);
  });
});
