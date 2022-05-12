/* import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setUser = createAction(
    '[USER] setUser',
    props<{ user: User }>()
);
 */

import { createAction, props } from '@ngrx/store';

export const enum UserActions {
    setUser = '[USER] set user',
    addUser = '[USER] add user' // ! Este es un ejemplo de mas acciones
}

export const setUserAction = createAction(
    UserActions.setUser,
    props<{ username: string; password: string }>()
);

export const addUserAction = createAction(// ! this is an example
    UserActions.addUser,
    props<{ name: string; lastname: string }>()
);

