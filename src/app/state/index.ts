import { CounterEffects } from './counter/counter.effects';
import { CounterFacade } from './counter/counter.facade';
import { CounterState } from './counter/counter.model';
import { counterReducer } from './counter/counter.reducer';

// Plik umozliwiajacy dodawanie wiekszej ilosci modulow store (poza counter)
// Narazie znajduje sie tutaj tylko modul counter a caly store wyglada nastepujaco:
// {
//   counter: {
//     currentValue: 0 <- ta wartosc bedzie zmieniana przez counterReducer, dzieki 
//   }                    akcjom z counter.actions.ts, ktore wywolywane 
// }                      sa za pomoca metod serwisu CounterFacade
export const reducers = {
  counter: counterReducer,
};

export const effects = [CounterEffects];

export const facades = [CounterFacade];

export interface AppState {
  counter: CounterState;
}
