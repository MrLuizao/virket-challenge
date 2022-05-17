import { createReducer, on } from '@ngrx/store';

import { User } from '../models/user.model';
import * as userActions from './user.actions';

/* export const enum StateMachine {// ! Este es opcional, si lo quieres manejar como maquina de estados
    idle = 'idle',
    loading = 'loading'
    // ....
} */
export interface State {
    // control
    isLoading: boolean;
    isSuccess: boolean;
    hasError: boolean;
    // Data
    user: User;
    // username: string;
}

export const initialState: State = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    user: null,
    // username: null,
};

export const featureKey = 'user';

export const reducer = createReducer(
    initialState,

    on(userActions.getUserAction,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: true 
        })),

    on(userActions.setUserAction,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: false,
            user: action.user 
        })),

    on(userActions.setGuestUserAction,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: false,
            fullName: 'Invitado',
            email: '',
            picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
        })),

    // Se resuelve el endpoint
    on(userActions.addUserAction,
        // (state, action) => ({ ...state, username: action.name, isLoading: false })),
        (state, action) => ({ ...state, isLoading: false, hasError: false,  })),

    // Se devuelve error por el endpoint
    on(userActions.setErrorAction,
        (state, action) => ({ ...state, hasError: true, isLoading: false })),
);

// exportar ese reducer
export const userReducer = (state: any, action: any) => reducer(state, action);
