import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const setUser = createAction(
    '[USER] setUser',
    props<{ user: User }>()
);