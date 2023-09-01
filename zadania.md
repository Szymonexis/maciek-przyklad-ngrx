# Zadanie 1

Zmień wartość `currentValue` w magazynie (`store`) o nazwie `counter` na `mainValue`. Następnie zmodyfikuj wszystkie elementy fasady, efektów, reduktora, akcji itd., tak aby aplikacja nadal działała prawidłowo.

# Zadanie 2

Dodaj do magazynu `counter` wartość `secondaryValue` oraz akcję `lagBehind`. Celem tej akcji jest, aby wartość `secondaryValue` zawsze była o jeden stan w tyle w porównaniu z aktualnym stanem `mainValue`.

Skorzystaj z efektów.

Przykład:
`{ mainValue: 0, secondaryValue: null }` --incrementCounter--> `{ mainValue: 1, secondaryValue: 0 }` --incrementCounter--> `{ mainValue: 2, secondaryValue: 1 }` --setCounter(6)--> `{ mainValue: 6, secondaryValue: 2 }` i tak dalej...

# Zadanie 3

Jaka jest różnica między `mergeMap`, `concatMap` i `switchMap` (funkcje mapujące Observables z biblioteki **ngrx**)? Kiedy którego z nich powinno się używać?

# Zadanie 4

Wyjaśnij, jak działa operator spread. Co to jest immutable state / immutable variable? Dlaczego oba te koncepty są niesamowicie ważne w kontekście ngRx?

# Zadanie 5

Stwórz serwis HTTP w folderze `src/utils/http.service.ts` i użyj https://www.wordsapi.com/, aby pobierać dane o konkretnym słowie do magazynu i wyświetlać je w aplikacji. Stwórz nowy moduł wraz z komponentem (nazwij je "words"). Stwórz odpowiednie efekty, fasadę, reduktor itd.

Upewnij się, że magazyn odzwierciedla stan ładowania danych, który będzie wyglądał mniej więcej tak:

```javascript
interface WordsState {
  loading: boolean;
  data: WordsData;
}
