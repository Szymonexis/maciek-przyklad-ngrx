import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.model';

import * as actions from './counter.actions';

// Funkcja reducer ma za zadanie w momencie danej akcji wychwicic ja a nastepnie
// stworzyc nowy wizerunek danego modulu w store lub calego store na podstawie danej akcji
export const counterReducer = createReducer(
  initialState,
  on(actions.incrementCounter, (state) => ({
    ...state,
    currentValue: state.currentValue + 1,
  })),

  on(actions.decrementCounter, (state) => ({
    ...state,
    currentValue: state.currentValue - 1,
  })),

  on(actions.setCounter, (state, { counterValue }) => ({
    ...state,
    currentValue: counterValue,
  }))
);
