import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiProductsService } from 'src/app/services/api-products.service';
import * as cartActions from './cart.actions';
import { ApiCartItemsService } from 'src/app/services/api-cart-items.service';

@Injectable()

export class CartEffects {

    cartItemsData$ = createEffect(
        () => this.actions$.pipe(
            ofType(cartActions.loadItems),
            exhaustMap(
                () => this.service.getCartProducts()
                .pipe(
                    map(
                        (resp) => cartActions.setCartItemsAction({ cartItems: resp })
                    ),
                    catchError( err => of(cartActions.setErrorAction({payload: err})))
                )
            )
        )
    );

    constructor(private actions$: Actions, private service: ApiCartItemsService) { }

}
