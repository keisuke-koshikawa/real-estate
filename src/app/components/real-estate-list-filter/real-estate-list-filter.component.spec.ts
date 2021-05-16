import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateListFilterComponent } from './real-estate-list-filter.component';

describe('RealEstateListFilterComponent', () => {
  let component: RealEstateListFilterComponent;
  let fixture: ComponentFixture<RealEstateListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateListFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
