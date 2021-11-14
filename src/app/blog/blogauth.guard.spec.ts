import { TestBed } from '@angular/core/testing';

import { BlogauthGuard } from './blogauth.guard';

describe('BlogauthGuard', () => {
  let guard: BlogauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlogauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
