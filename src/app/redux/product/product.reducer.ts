import { Action, createReducer, on } from "@ngrx/store";
import { IProduct } from "src/app/interfaces/product.interface";
import { Product } from "../models/product.model";
import { CartAction, CartActionTypes } from "./product.actions";


const initialState: Array<Product> = []

export function cartReducer( state: Array<any> = initialState, action: CartAction){
    switch( action.type ){

        case CartActionTypes.STORE_ITEMS:
            return [action.payload];

        case CartActionTypes.ADD_ITEM:
            return [ ...state, action.payload];

        case CartActionTypes.DELETE_ITEM:
            return state.filter( item => item.id !== action.payload )        

        default:
            return state;
    }
}