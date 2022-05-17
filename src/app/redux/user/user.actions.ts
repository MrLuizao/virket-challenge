/* import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setUser = createAction(
    '[USER] setUser',
    props<{ user: User }>()
);
 */

import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const enum UserActions {
    setUser = '[USER] set user',
    addUser = '[USER] add user', // ! Este es un ejemplo de mas acciones
    getUser = '[USER] get user',
    setError = '[USER] set error in user module',

    setGuestUser = '[USER] set guest user',

}

export const getUserAction = createAction(
    UserActions.getUser,
);

export const setUserAction = createAction(
    UserActions.setUser,
    // props<{ username: string; password: string }>()
    props<{ user: User }>()
);

export const addUserAction = createAction(// ! this is an example
    UserActions.addUser,
    // props<{ name: string; lastname: string }>()
);

export const setErrorAction = createAction(// ! this is an example
    UserActions.setError,
    props<{ error: any }>()
);

export const setGuestUserAction = createAction(
    UserActions.setGuestUser,
    // props<{ fullName: string; email: string; picture: string;}>()
    // props<{ user: User }>()
);