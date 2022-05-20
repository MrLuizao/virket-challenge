import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromSelector from 'src/app/redux/cart/cart.selectors';
import * as fromActions from 'src/app/redux/cart/cart.actions';
import { filter } from "rxjs/operators";

@Injectable()


export class CartFacade {
    
    constructor( private store: Store ){}

    get items$() {
        return this.store.select(fromSelector.cartItemsSelector);
    }

    get hasError$(){
        return this.store.select(fromSelector.hasErrorSelector).pipe(filter(x=>!!x));
    }

    getCartItems() {
        return this.store.dispatch(fromActions.loadItems());
    }

    get addItem$() {
        return this.store.select(fromSelector.cartAddItemSelector);
    }

    // updateCartItems() {
    //     return this.store.dispatch(fromActions.addItemAction());
    // }
}