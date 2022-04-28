import { ActionReducerMap } from "@ngrx/store";
import * as reducer from "./user/user.reducer";

export interface AppState {
    user: reducer.State,
}

export const appReducers: ActionReducerMap<AppState> = {
    user: reducer.setUserReducer,
}