import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from './cart.reducer';


export const productState = createFeatureSelector<fromReducer.State>(fromReducer.featureKey);

export const isLoadingSelector = createSelector(
    productState, ({ isLoading }) => isLoading
);

export const cartItemsSelector = createSelector(
    productState, ({ cartItems }) => cartItems
);

export const hasErrorSelector = createSelector(productState, ({ hasError }) => hasError);
