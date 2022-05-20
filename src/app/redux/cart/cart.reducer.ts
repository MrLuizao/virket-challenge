// import { Product } from "../models/product.model";
// import { CartAction, CartActionTypes } from "./cart.actions";

import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product.model";
import * as cartActions from './cart.actions';


// const initialState: Array<Product> = [];

// export function cartReducer( state: Array<any> = initialState, action: CartAction){
//     switch( action.type ){
//         case CartActionTypes.SET_CART_ITEMS:
//             return [ ...state, action.payload];

//         case CartActionTypes.ADD_CART_ITEM:
//             return [ ...state, action.payload];

//         case CartActionTypes.REMOVE_CART_ITEM:
//             return state.filter( item => item.id !== action.payload )        
    
//         default:
//             return state;
//     }
// }


export interface State {
    isLoading: boolean;
    isSuccess: boolean;
    hasError: boolean;
    items: Product[];
}

export const initialState: State = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    items: [],
};

export const featureKey = 'cart';

export const reducer = createReducer(
    initialState,

    on(cartActions.loadItems,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: true 
    })),

    on(cartActions.setCartItemsAction, (state, {items}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        items: [...items]
    })),

    on(cartActions.setErrorAction, (state, {payload}) => ({ 
        ...state,
        hasError: true, 
        isLoading: false,
        error: payload
    })),

    on(cartActions.addItemAction, (state, {item}) => ({ ...state, item: {...item}})),
)

export const cartReducer = (state: any, action: any) => reducer(state, action);

