import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './user.reducer';

//! Crear selector del modulo de user
export const userState = createFeatureSelector<fromReducer.State>(fromReducer.featureKey);

// !Apartir del selector de feature crea uno pra unpedazo de info
export const isLoadingSelector = createSelector(
    userState, ({ isLoading }) => isLoading
);

export const userSelector = createSelector(
    userState, ({ user }) => user
);

export const guestUserSelector = createSelector(
    userState, ({ user }) => user
);

export const resetUserSelector = createSelector(
    userState, ({ user }) => user
);


export const hasErrorSelector = createSelector(userState, ({ hasError }) => hasError);

