import { RealEstate } from "./real-estate";

export interface RealEstateFilter {
  tradePriceFilter: string;
}

export interface State {
  realEstateList: {
    items: RealEstate[];
    filter: RealEstateFilter;
  };
}

export const initialState = {
  realEstateList: {
    items: [],
    filter: {
      tradePriceFilter: '',
    }
  },
};