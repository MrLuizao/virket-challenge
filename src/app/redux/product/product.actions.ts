import { Action, createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';


export enum CartActionTypes {
    STORE_ITEMS = '[CART] Store Items',
    ADD_ITEM = '[CART] Add Item',
    DELETE_ITEM = '[CART] Delete Item'
}

export class SetAllItemsAction implements Action {
    readonly type = CartActionTypes.STORE_ITEMS;
    constructor ( public payload: Product){}
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM;
    constructor ( public payload: Product){}
}

export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DELETE_ITEM;
    constructor ( public payload: Product){}
}

export type CartAction = SetAllItemsAction | AddItemAction | DeleteItemAction;