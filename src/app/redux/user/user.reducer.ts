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
    username: string;// !demostrativo
    // password: string;// !demostrativo
}

export const initialState: State = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    user: null,
    username: null,
};

export const featureKey = 'user';

export const reducer = createReducer(
    initialState,
    on(userActions.setUserAction,// Este es como el case de un switch
        (state, action) => ({ ...state, username: action.username })),
);

// exportar ese reducer
export const userReducer = (state: any, action: any) => reducer(state, action);
