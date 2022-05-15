// import { Action, createAction, props } from '@ngrx/store';
// import { Product } from '../models/product.model';

import { createAction, props } from "@ngrx/store";


// export enum ProductActionTypes {
//     STORE_ITEMS = '[PRODUCT] All Items',
//     ADD_ITEM = '[PRODUCT] Add Item',
//     DELETE_ITEM = '[PRODUCT] Delete Item'
// }

// export class SetAllItemsAction implements Action {
//     readonly type = ProductActionTypes.STORE_ITEMS;
//     constructor ( public payload: Product){}
// }

// export class AddItemAction implements Action {
//     readonly type = ProductActionTypes.ADD_ITEM;
//     constructor ( public payload: Product){}
// }

// export class DeleteItemAction implements Action {
//     readonly type = ProductActionTypes.DELETE_ITEM;
//     constructor ( public payload: Product){}
// }

// export type ProductAction = SetAllItemsAction | AddItemAction | DeleteItemAction;


export const enum ProductActions {
    setAllProducts = '[PRODUCT] set all products',
    getAllProducts = '[PRODUCT] set all products',
    setProduct = '[PRODUCT] add one product', 
    getProduct = '[PRODUCT] get one product',
    setError = '[PRODUCT] set error in product module',
}

export const setProductAction = createAction(
    ProductActions.setAllProducts
);

export const getProductAction = createAction(// ! this is an example
    ProductActions.getAllProducts
);

export const setErrorAction = createAction(
    ProductActions.setError,
    props<{ error: any }>()
);