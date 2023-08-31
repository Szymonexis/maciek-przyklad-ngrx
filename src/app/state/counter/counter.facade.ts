import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';

import { SetCounterPayload } from './counter.model';

import * as selectors from './counter.selectors';
import * as actions from './counter.actions';

// Facade to serwis ktory odpowiada za dany modul store'a.
// Zadaniem facady jest sprowadzic do jednego injectowalnego serwisu 
// wszystkie selektory oraz akcje / akcje-inicjalizujace (initialActions).
@Injectable()
export class CounterFacade {
  counterCurrentValue$ = this.store.select(selectors.selectCounterCurrentValue);

  constructor(private store: Store<AppState>) {}

  incrementCounter(): void {
    this.store.dispatch(actions.incrementCounter());
  }

  decrementCounter(): void {
    this.store.dispatch(actions.decrementCounter());
  }

  setCounter(payload: SetCounterPayload): void {
    this.store.dispatch(actions.setCounter(payload));
  }
}
