# Zadanie 1

Zmien wartosc `currentValue` w store counter na `mainValue` i zmien wszystkie czesci facady, effectow, reducera, actions itd itp w taki sposob rzeby aplikacja nadal dzialala prawidlowo.

# Zadanie 2 

Dodaj do stora `counter` wartosc `secondaryValue` i dodaj akcje `lagBehind`. Celem tej akcji jest to aby wartosc secondary counter zawsze byla i jeden stan do tylu w porownaniu z aktualnym stanem `mainValue`. 

Skorzystaj z effectow.

Przyklad:
`{ mainValue: 0, secondaryValue: null }` --incrementCaounter--> `{ mainValue: 1, secondaryValue: 0 }` --incrementCaounter--> `{ mainValue: 2, secondaryValue: 1 }` --setCounter(6)--> `{ mainValue: 6, secondaryValue: 2 }` i tak dalej...

# Zadanie 3 

Jaka jest roznica miedzy `mergeMap`, `concatMap`, `switchMap` (funkcje mapujace Observables z libki **ngrx**)? Kiedy ktorego powinno sie uzywac? 

# Zadanie 4

Wytlumacz jak dziala spread operator. Czym jest immutable state/immutable variable? Dlaczego oba te koncepty sa niesamowicie wazne w kontektscie ngRx?

# Zadanie 5

Stworz serwis http w folderze `src/utils/http.service.ts` i uzyj https://www.wordsapi.com/ aby zaciagac dane o konkretnym slowie do store i wyswieltac je w aplikacji. Stworz nowy modul wraz z commponentem (nazwij je words). Stworz odpowiednie effecty, facade, reducer, itd.

Upewnij sie ze store odzwierciedli stan ladowania danych aka. bedzie wygladal mniej wiecej tak:

```javascript
interface WordsState {
  loading: boolean;
  data: WordsData;
}
```
