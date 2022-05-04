import { Action, createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product.interface';
import { Product } from '../models/product.model';


export enum CartActionTypes {
    ADD_ITEM = '[CART] Add Item',
    DELETE_ITEM = '[CART] Delete Item'
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.ADD_ITEM;
    constructor ( public payload: Product){}
}

export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DELETE_ITEM;
    constructor ( public payload: Product){}
}

export type CartAction = AddItemAction | DeleteItemAction;