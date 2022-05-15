import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromSelector from 'src/app/redux/product/product.selectors';
import * as fromActions from 'src/app/redux/product/product.actions';
import { filter } from "rxjs/operators";

@Injectable()

export class ProductFacade {
    constructor(private store: Store){}

    get products$() {
        return this.store.select(fromSelector.productState);
    }

    get hasError$(){
        return this.store.select(fromSelector.hasErrorSelector).pipe(filter(x=>!!x));
    }

    getProduct() {
        return this.store.dispatch(fromActions.setProductAction());
    }

}