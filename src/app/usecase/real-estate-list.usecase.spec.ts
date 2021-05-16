import { TestBed } from '@angular/core/testing';

import { RealEstateListUsecase } from './real-estate-list.usecase';

describe('RealEstateList.UsecaseService', () => {
  let service: RealEstateListUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateListUsecase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
