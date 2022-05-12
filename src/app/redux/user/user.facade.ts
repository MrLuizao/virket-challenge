import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromSelector from 'src/app/redux/user/user.selectors';
import * as fromActions from 'src/app/redux/user/user.actions';
import { filter } from 'rxjs/operators';

@Injectable()
export class UserFacade {
    constructor(private store: Store){}

    get user$() {
        return this.store.select(fromSelector.userSelector);
    }

    get username$() {
        return this.store.select(fromSelector.usernameSelector).pipe(filter(a=>!!a));
    }

    get hasError$(){
        return this.store.select(fromSelector.hasErrorSelector).pipe(filter(x=>!!x));
    }

    getUser() {
        return this.store.dispatch(fromActions.getUserAction());
    }
}
