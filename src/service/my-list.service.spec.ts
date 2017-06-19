import { TestBed, inject } from '@angular/core/testing';

import { MyListService } from './my-list.service';

describe('MyListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyListService]
    });
  });

  it('should be created', inject([MyListService], (service: MyListService) => {
    expect(service).toBeTruthy();
  }));
});
