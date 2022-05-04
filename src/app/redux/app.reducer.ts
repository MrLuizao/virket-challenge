import { ActionReducerMap } from "@ngrx/store";
import { cartReducer } from "./product/product.reducer";
import * as useReducer from "./user/user.reducer";

export interface AppState {
    user: useReducer.State
    cart: any
}

export const appReducers: ActionReducerMap<AppState> = {
    user: useReducer.setUserReducer,
    cart: cartReducer
}
