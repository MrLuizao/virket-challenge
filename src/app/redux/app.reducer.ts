import { ActionReducerMap } from "@ngrx/store";
import * as useReducer from "./user/user.reducer";

import * as prodReducer from "./product/product.reducer";
import * as cartReducer from "./cart/cart.reducer";


export interface AppState {
    user: useReducer.State
    product: prodReducer.State,
    cart: cartReducer.State
}

export const appReducers: ActionReducerMap<AppState> = {
    user: useReducer.userReducer,
    product: prodReducer.productReducer,
    cart: cartReducer.cartReducer
}
