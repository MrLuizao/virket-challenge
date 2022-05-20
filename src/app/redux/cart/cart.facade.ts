import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromSelector from 'src/app/redux/cart/cart.selectors';
import * as fromActions from 'src/app/redux/cart/cart.actions';
import { filter } from "rxjs/operators";
import { Product } from "../models/product.model";

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

    addItem( product: Product) {
        return this.store.dispatch(fromActions.addItemAction({payload: product}));
    }

    deleteItem( item: number) {
        return this.store.dispatch(fromActions.deleteItemAction({item}));
    }
}