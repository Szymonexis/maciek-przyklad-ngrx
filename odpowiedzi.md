# Zadanie 3

Jaka jest różnica między `mergeMap`, `concatMap` i `switchMap` (funkcje mapujące Observables z biblioteki **ngrx**)? Kiedy którego z nich powinno się używać?

# Odpowiedz na zadanie 3

1. `mergeMap`:

- `mergeMap` (wcześniej znany jako flatMap) służy do mapowania wartości z jednego `Observable` na inny `Observable`.
- Nie czeka na zakończenie wewnętrznych `Observables` i równocześnie obsługuje wiele wewnętrznych `Observables`.
- Wywołuje wewnętrzne `Observables` w dowolnej kolejności i emituje wyniki w kolejności, w jakiej są gotowe.
- Jeśli zależy ci na jednoczesnej obsłudze wielu źródeł danych, `mergeMap` jest odpowiednią opcją.

2. `concatMap`:

- `concatMap` służy również do mapowania wartości z jednego `Observable` na inny `Observable`.
- Czeka, aż jedno wewnętrzne `Observable` zostanie zakończone, zanim rozpocznie obsługę kolejnego.
- Emituje wyniki w kolejności, w jakiej wewnętrzne `Observables` zostały wywołane.
- Jeśli zależy ci na zachowaniu kolejności i nie chcesz, aby jednocześnie były obsługiwane różne źródła danych, `concatMap` jest odpowiednią opcją.

3. `switchMap`:

- `switchMap` jest używane, gdy chcesz przerwać i porzucić bieżącą obsługę wewnętrznego `Observable`, gdy pojawi się nowa wartość na wejściu.
- Zawsze obsługuje tylko jedno wewnętrzne `Observable` i przerywa je, gdy pojawi się nowa wartość na wejściu.
- Jest przydatne, gdy masz dynamiczne źródło danych, a chcesz obsługiwać tylko najnowsze zapytanie, ignorując wyniki poprzednich.

Wybór między tymi funkcjami zależy od konkretnego przypadku użycia:

- Użyj `mergeMap`, jeśli chcesz równocześnie obsługiwać wiele źródeł danych.
- Użyj `concatMap`, jeśli zależy ci na zachowaniu kolejności obsługi i nie chcesz, aby równocześnie były obsługiwane różne źródła danych.
- Użyj `switchMap`, jeśli chcesz obsługiwać tylko najnowsze żądanie i zignorować wyniki poprzednich.

Wybór właściwej funkcji mapującej zależy od konkretnej sytuacji i wymagań projektu.

# Zadanie 4

Wyjaśnij, jak działa operator spread. Co to jest immutable state / immutable variable? Dlaczego oba te koncepty są niesamowicie ważne w kontekście ngRx?

# Odpowiedz na zadanie 4

### Spread

Operator spread / Operator rozprzestrzenienia `...` w JS jest używany do tworzenia nowych obiektów lub tablic poprzez kopiowanie właściwości lub elementów z istniejących obiektów lub tablic. 

Spread ma wlasciwosci `shallowCopy`, to znaczy ze jezeli mamy doczynienia z obiektem gleboko zagniezdzonym to tylko elementy pierwszorzedowe zostaja skopiowane, glebsze elementy zostaja w swoim orginalnym stanie i zostaja kopiowane poprzez referencje.

Przyklad:
```typescript
const foo = {
    a: 5,
    b: {
        c: 0,
        d: 1
    }
}

const bar = { ...foo };

console.log({ foo, bar });
// console.log output
// {
//   "foo": {
//     "a": 5,
//     "b": {
//       "c": 0,
//       "d": 1
//     }
//   },
//   "bar": {
//     "a": 5,
//     "b": {
//       "c": 0,
//       "d": 1
//     }
//   }
// }

foo.b.c = 4;
foo.a = 3;
console.log({ foo, bar })
// console.log output
// {
//   "foo": {
//     "a": 3,    wartosc "a" zmienila sie tylko w "foo"
//     "b": {
//       "c": 4,  wartosc "b"."c" zmienila sie w "foo" oraz "bar"
//       "d": 1
//     }
//   },
//   "bar": {
//     "a": 5,
//     "b": {
//       "c": 4,  wartosc "b"."c" zmienila sie w "foo" oraz "bar"
//       "d": 1
//     }
//   }
// }
```

### Immutable state/Immutable variable

State to stan, variable to zmienna. Immutable snaczy niezmienialny - dla obu przenosi sie to na ustawienie flagi writable na false 
```typescript
const obj = Object.defineProperty({}, "width", { value: 20, writable: false });
```

co czesto przedstawia sie w ten sposob 

```typescript 
const obj: { readonly width: number; } = { width: 20 };
```

> [!WARNING]
> Nie jest to dokladnie ten sam zapis ale uzyskuje ten sam rezultat wiec na potrzeby tego zadania ominmy roznice

W skrocie, immutable state to taki stan ktorego wartosci nie mozna zmienic, mozna go tylko nadpisac w calosci.

### Dlaczego oba te koncepty są niesamowicie ważne w kontekście ngRx?

ngRx korzysta z obu tyc hkonceptow i ich pelne zrozumienie jest bardzo wazne w szczegolnosci kiedy piszemy reducery w ngRx.






