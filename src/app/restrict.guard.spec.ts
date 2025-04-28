import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { restrictGuard } from './restrict.guard';

describe('restrictGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => restrictGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
