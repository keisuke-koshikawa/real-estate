import { Component, OnInit } from '@angular/core';
import { RealEstateService } from './services/real-estate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  realEstates = this.realEstateService.realEstates$;

  constructor(
    private realEstateService: RealEstateService
  ) {}

  ngOnInit() {
    this.realEstateService.fetchRealEstates()
  }
}
