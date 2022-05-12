import { Product } from "../models/product.model";
import { CartAction, CartActionTypes } from "./cart.actions";


const initialState: Array<Product> = [];

export function cartReducer( state: Array<any> = initialState, action: CartAction){
    switch( action.type ){
        case CartActionTypes.SET_CART_ITEMS:
            return [ ...state, action.payload];

        case CartActionTypes.ADD_CART_ITEM:
            return [ ...state, action.payload];

        case CartActionTypes.REMOVE_CART_ITEM:
            return state.filter( item => item.id !== action.payload )        
    
        default:
            return state;
    }
}