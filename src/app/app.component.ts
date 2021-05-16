import { Component, OnInit } from '@angular/core';
import { RealEstateFilter } from './models/state';
import { RealEstateListUsecase } from './usecase/real-estate-list.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  realEstates$ = this.realEstateList.realEstates$;
  realEstateListFilter$ = this.realEstateList.filter$;

  constructor(
    private realEstateList: RealEstateListUsecase
  ) {}

  ngOnInit() {
    this.realEstateList.fetchRealEstates()
  }

  setRealEstateListFilter(value: RealEstateFilter) {
    this.realEstateList.setTradePriceFilter(value.tradePriceFilter);
  }
}
