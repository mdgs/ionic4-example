import { TestBed } from '@angular/core/testing';

import { MyThirdService } from './my-third.service';

describe('MyThirdService', () => {
  let service: MyThirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyThirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
