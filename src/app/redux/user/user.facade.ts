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

    get guestUser$() {
        return this.store.select(fromSelector.guestUserSelector);
    }

    get hasError$(){
        return this.store.select(fromSelector.hasErrorSelector).pipe(filter(x=>!!x));
    }

    getUser() {
        return this.store.dispatch(fromActions.getUserAction());
    }

    getGuest() {
        return this.store.dispatch(fromActions.setGuestUserAction({user: null}));
    }

    resetUser() {
        return this.store.dispatch(fromActions.resetUserAction({user: null}));
    }

}
