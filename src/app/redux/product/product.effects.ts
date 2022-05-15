import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap } from 'rxjs/operators';
import { ApiProductsService } from 'src/app/services/api-products.service';
import * as productActions from './product.actions';

@Injectable()

export class ProductsEffects {

    porductData$ = createEffect ( () =>
        this.actions$.pipe(
            ofType(productActions.getProductAction),
            // exhaustMap(() =>
            //     this.service.getAllProducts().pipe(map((resp: any) => 
            //         productActions.setProductAction(resp)),
            //         catchError(error => of(productActions.setErrorAction({ error })))
            //     )
            // )
        )
    );

    constructor(
        private actions$: Actions,
        private service: ApiProductsService
    ) { }

}