import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as userActions from './user.actions';


export interface State {
    // control
    isLoading: boolean;
    isSuccess: boolean;
    hasError: boolean;
    // Data
    user: User;
}

export const initialState: State = {
    isLoading: false,
    isSuccess: false,
    hasError: false,
    user: {
        email: '',
        gender: '',
        fullName: '',
        picture: {
            large: '',
            medium: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
            thumbnail: '',
        },
        titleText: 'Bienvenido',
        guest: null
    },
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
            // user: action.user 
            user: {
                email: action.user.email,
                gender: action.user.gender,
                fullName: action.user.fullName,
                picture: action.user.picture,
                titleText: 'Bienvenido de vuelta,',
                guest: false,
            }
        })),

    on(userActions.setGuestUserAction,
        (state, action) => ({ 
            ...state, 
            hasError: false, 
            isLoading: false,
            user: {
                email: '',
                gender: '',
                fullName: 'Invitado ',
                picture: {
                    large: '',
                    medium: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                    thumbnail: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
                },
                titleText: 'Bienvenido',
                guest: true
            },
        })),

    on(userActions.addUserAction,
        (state, action) => ({ ...state, isLoading: false, hasError: false,  })),

    on(userActions.setErrorAction,
        (state, action) => ({ ...state, hasError: true, isLoading: false })),

    on( userActions.resetUserAction,
        (state, action) => ({ 
            ...state, 
            isLoading: false,
            isSuccess: false,
            hasError: false,
            user: initialState.user
        })),
);

export const userReducer = (state: any, action: any) => reducer(state, action);
