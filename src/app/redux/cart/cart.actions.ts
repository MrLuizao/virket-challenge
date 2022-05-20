import { Action, createAction, props } from "@ngrx/store";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";


// export enum CartActionTypes {
//     SET_CART_ITEMS = '[CART] Cart Items',
//     ADD_CART_ITEM = '[CART] Add Item',
//     REMOVE_CART_ITEM = '[CART] Remove Item'
// }

// export class SetCartItems implements Action {
//     readonly type = CartActionTypes.SET_CART_ITEMS;
//     constructor ( public payload: Product){}
// }
// export class AddCartItem implements Action {
//     readonly type = CartActionTypes.ADD_CART_ITEM;
//     constructor ( public payload: Product){}
// }
// export class RemoveCartItem implements Action {
//     readonly type = CartActionTypes.REMOVE_CART_ITEM;
//     constructor ( public payload: Product){}
// }

// export type CartAction = SetCartItems | AddCartItem | RemoveCartItem;

export const enum ProductActions {
    loadCartItems = '[CART] load cart items',
    setCartItems = '[CART] cart items',
    setError = '[CART] set error in cart module',

    addItem = '[CART] add item',
}

export const loadItems = createAction(
    ProductActions.loadCartItems
);

export const setCartItemsAction = createAction(
    ProductActions.setCartItems,
    props<{ items: Product[] }>()
);

export const setErrorAction = createAction(
    ProductActions.setError,
    props<{ payload: any }>()
);


export const addItemAction = createAction(
    ProductActions.addItem,
    props<{ item: Product }>()
);
