import { TestBed } from '@angular/core/testing';

import { UserdbService } from './userdb.service';

describe('UserdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdbService = TestBed.get(UserdbService);
    expect(service).toBeTruthy();
  });
});
