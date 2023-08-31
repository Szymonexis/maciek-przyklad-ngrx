import { createAction, props } from '@ngrx/store';
import { SetCounterPayload } from './counter.model';

// Plik zawierajacy akcje, kazda akcja musi przynajmniej posiadac swoj type - tj. 
// string opisujacy co ona robi. Ten string dziala rowniez jako 
// unikalny identyfikator wykorzystywany przez ngRx a wiec w calej aplikacji
// moze tylko istniec jedna akcja typu '[Counter] Decrement counter'.
// W przeciwnym przypadku dojdzie do zderzenia akcji i ta ktora pierwsza 
// zostanie skompilowana, bedzie dzialac

export const decrementCounter = createAction('[Counter] Decrement counter');

export const incrementCounter = createAction('[Counter] Increment counter');

// Akcje moga rowniez posiadac propsy, zawsze w postaci pojedynczego typu

export const setCounter = createAction(
  '[Counter] Set counter',
  props<SetCounterPayload>()
);
