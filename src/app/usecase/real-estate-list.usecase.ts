import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Store } from "../stores/store.service";
import { RealEstate } from "../models/real-estate";

@Injectable({
  providedIn: 'root'
})
export class RealEstateListUsecase {

  get realEstates$() {
    return this.store
      .select(state => state.realEstateList)
      .pipe(
        map(({ items, filter }) =>
          items.filter(estate =>
            (estate.TradePrice).includes(filter.tradePriceFilter)
          )
        )
      );
  }

  get filter$() {
    return this.store.select(state => state.realEstateList.filter);
  }


  constructor(
    private httpClient: HttpClient,
    private store: Store
  ) { }

  async fetchRealEstates() {
    const realEstates = await this.httpClient
      .get<{ data: RealEstate[] }>("https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=20201&to=20211&area=11&city=11222")
      .pipe(map(resp => resp.data))
      .toPromise();

    this.store.update(state => ({
      ...state,
      realEstateList: {
        ...state.realEstateList,
        items: realEstates
      }
    }));
  }

  setTradePriceFilter(tradePriceFilter: string) {
    this.store.update(state => ({
      ...state,
      realEstateList: {
        ...state.realEstateList,
        filter: {
          tradePriceFilter
        }
      }
    }));
  }
}
