import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { CounterState } from './counter.model';

// Selektory pozwalaja nam na zaznaczanie czesci store
const selectCounterState = (state: AppState): CounterState => state.counter;

export const selectCounterCurrentValue = createSelector(
  selectCounterState,
  (state) => state.currentValue
);
