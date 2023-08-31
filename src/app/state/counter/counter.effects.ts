import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as actions from './counter.actions';
import { tap } from 'rxjs';

const message = 'Hello from effects!!!';

// Effecty to serwisy ktore odpowiadaja za przechwytywanie danego rodzaju 
// akcji i wyprowadzania odpowiedzi w wyniku przechwyconej akcji.
// Sa niezwykle przydatne przy wyprowadzaniu zapytan do API 
// oraz endpointow GraphQL oraz WebSockets.
// Zazwyczaj w takich sytuacjach wykorzystuje sie pattern
// initialAction -> successAction -> failureAction
// (na przykladzie req-res HTTP/HTTPS)
// initialAction - akcja rozpoczynajaca dany request (ale go nie wykonujaca), udostepniana na zewnatrz Facady
// successAction - akcja wysylana w momencie przyjscia res z API o kodzie 2xx
// failureAction - akcja wysylana w momencie przyjscie res z API o kodzie 4xx lub 5xx 
// (inne kody zaleza od konfiguracji)
@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  incrementCounter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.incrementCounter),
        tap(({ type, ...payload }) => {
          console.log({ message, type, payload });
        })
      ),
    { dispatch: false }
  );

  decrementCounter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.decrementCounter),
        tap(({ type, ...payload }) => {
          console.log({ message, type, payload });
        })
      ),
    { dispatch: false }
  );

  setCounter$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actions.setCounter),
        tap(({ type, ...payload }) => {
          console.log({ message, type, payload });
        })
      ),
    { dispatch: false }
  );
}
