import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { ApiProductsService } from 'src/app/services/api-products.service';
import * as productActions from './product.actions';

@Injectable()

export class ProductsEffects {

    productData$ = createEffect(
        () => this.actions$.pipe(
            ofType(productActions.loadProductsAction),
            exhaustMap(
                () => this.service.getAllProducts()
                .pipe(
                    map(
                        (resp) => productActions.setProductsAction({ products: resp })
                    ),
                    catchError( err => of(productActions.setErrorAction({payload: err})))
                )
            )
        )

    );

    constructor(private actions$: Actions, private service: ApiProductsService) { }

}