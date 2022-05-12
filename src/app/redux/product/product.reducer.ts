import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/interfaces/product.interface";
import { Product } from "../models/product.model";
import { ProductAction, ProductActionTypes } from "./product.actions";


const initialState: Array<Product> = []

export function productReducer( state: Array<any> = initialState, action: ProductAction){
    switch( action.type ){

        case ProductActionTypes.STORE_ITEMS:
            return [ ...state, action.payload];

        case ProductActionTypes.ADD_ITEM:
            return [ ...state, action.payload];

        case ProductActionTypes.DELETE_ITEM:
            return state.filter( item => item.id !== action.payload )        

        default:
            return state;
    }
}