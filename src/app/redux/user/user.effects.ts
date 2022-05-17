import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ApiDataService } from 'src/app/services/api-data.service';
import * as userActions from './user.actions';
@Injectable()
export class UserEffects {

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.getUserAction),
            exhaustMap(() =>
                this.service.getUserData().pipe(map((resp: any) =>
                    userActions.setUserAction({ user: resp })),
                    catchError(error => of(userActions.setErrorAction({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private service: ApiDataService
    ) { }
}
