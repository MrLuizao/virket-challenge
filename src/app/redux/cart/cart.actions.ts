import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product.model";

export const enum ProductActions {
    loadCartItems = '[CART] load cart items',
    setCartItems = '[CART] cart items',
    setError = '[CART] set error in cart module',
    addItem = '[CART] add item ',
    deleteItem = '[CART] delete item '
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
    props<{ payload: Product }>()
);

export const deleteItemAction = createAction(
    ProductActions.deleteItem,
    props<{item: number}>()
)


  