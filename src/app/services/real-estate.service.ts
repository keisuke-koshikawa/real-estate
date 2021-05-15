import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RealEstate } from '../models/real-estate';

@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  private estatesSubject = new BehaviorSubject<RealEstate[]>([]);

  get realEstates$() {
    return this.estatesSubject.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  fetchRealEstates(): void {
    this.httpClient
      .get<{ data: RealEstate[] }>("https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20201&to=20211&area=11&city=11222")
      .pipe(map(response => response.data))
      .subscribe(estates => {
        this.estatesSubject.next(estates)
      });
  }
}
