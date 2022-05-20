import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product.model";
import * as cartActions from './cart.actions';


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

    on( cartActions.loadItems,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: true 
    })),

    on( cartActions.setCartItemsAction, (state, {items}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        items: [...items]
    })),

    on( cartActions.setErrorAction, 
        (state, {payload}) => ({ 
        ...state,
        hasError: true, 
        isLoading: false,
        error: payload
    })),

    on( cartActions.setCartItemsAction, (state, {items}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        items: [...items]
    })),


    on( cartActions.loadItems,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: true 
    })),


    on( cartActions.addItemAction, (state, {payload}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        items: [...state.items, payload]
    })),

    on( cartActions.deleteItemAction, (state, {item}) => ({ 
        ...state, 
        hasError: false, 
        isLoading: false,
        items: [...state.items.filter( (prods) => prods.id !== item)]
    })),

)

export const cartReducer = (state: any, action: any) => reducer(state, action);

