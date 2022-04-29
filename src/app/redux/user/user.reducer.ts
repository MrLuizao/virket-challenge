import { createReducer, on } from '@ngrx/store';
import { User } from "../models/user.model";
import { setUser } from "./user.actions";

export interface State {
    user: User;
}

export const initialState: State = {
    user: {
        fullName: '',
        email: '',
        titleText: 'Bienvenido',
        picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        guest: null
    } 
}

const _setUserReducer = createReducer( initialState,
    on( setUser, (state, {user}) => ({
        ...state, 
        user: {...user} 
    })),
)

export function setUserReducer(state: any, action: any) {
    return _setUserReducer(state, action);
}