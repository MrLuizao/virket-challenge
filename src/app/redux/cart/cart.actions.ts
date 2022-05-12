import { Action } from "@ngrx/store";
import { Product } from "../models/product.model";


export enum CartActionTypes {
    SET_CART_ITEMS = '[CART] Cart Items',
    ADD_CART_ITEM = '[CART] Add Item'
}

export class SetCartItems implements Action {
    readonly type = CartActionTypes.SET_CART_ITEMS;
    constructor ( public payload: Product){}
}
export class AddCartItem implements Action {
    readonly type = CartActionTypes.ADD_CART_ITEM;
    constructor ( public payload: Product){}
}

export type CartAction = SetCartItems | AddCartItem;