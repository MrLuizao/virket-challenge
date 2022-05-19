// import { Action, createReducer, on } from "@ngrx/store";
// import { IProduct } from "src/app/interfaces/product.interface";
// import { Product } from "../models/product.model";
// import { ProductAction, ProductActionTypes } from "./product.actions";

import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product.model";
import * as productActions from './product.actions';


// const initialState: Array<Product> = []

// export function productReducer( state: Array<any> = initialState, action: ProductAction){
//     switch( action.type ){

//         case ProductActionTypes.STORE_ITEMS:
//             return [ ...state, action.payload];

//         case ProductActionTypes.ADD_ITEM:
//             return [ ...state, action.payload];

//         case ProductActionTypes.DELETE_ITEM:
//             return state.filter( item => item.id !== action.payload )        

//         default:
//             return state;
//     }
// }


export interface State {
    isLoading: boolean;
    isSuccess: boolean;
    hasError: boolean;
    products: Product[];
}

export const initialState: State = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    products: [],
};

export const featureKey = 'product';


export const reducer = createReducer(
    initialState,
    on(productActions.loadProductsAction,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: true 
    })),

    on(productActions.setProductsAction, (state, {products}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        products: [...products]
    })),

    on(productActions.setErrorAction, (state, {payload}) => ({ 
        ...state,
        hasError: true, 
        isLoading: false,
        error: payload
    }))
    
);

export const productReducer = (state: any, action: any) => reducer(state, action);



