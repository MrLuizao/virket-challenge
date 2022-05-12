import { ActionReducerMap } from "@ngrx/store";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";
import * as useReducer from "./user/user.reducer";

export interface AppState {
    user: useReducer.State
    product: any,
    cart: any
}

export const appReducers: ActionReducerMap<AppState> = {
    user: useReducer.setUserReducer,
    product: productReducer,
    cart: cartReducer
}
