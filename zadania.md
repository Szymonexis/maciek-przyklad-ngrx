# Zadanie 1 - Praktyka

Zmień wartość `currentValue` w magazynie (`store`) o nazwie `counter` na `mainValue`. Następnie zmodyfikuj wszystkie elementy fasady, efektów, reduktora, akcji itd., tak aby aplikacja nadal działała prawidłowo.

# Zadanie 2 - Praktyka

Dodaj do magazynu `counter` wartość `secondaryValue` oraz akcję `lagBehind`. Celem tej akcji jest, aby wartość `secondaryValue` zawsze była o jeden stan w tyle w porównaniu z aktualnym stanem `mainValue`.

Skorzystaj z efektów.

Przykład:
`{ mainValue: 0, secondaryValue: null }` --incrementCounter--> `{ mainValue: 1, secondaryValue: 0 }` --incrementCounter--> `{ mainValue: 2, secondaryValue: 1 }` --setCounter(6)--> `{ mainValue: 6, secondaryValue: 2 }` i tak dalej...

# Zadanie 3 - Teoria

Jaka jest różnica między `mergeMap`, `concatMap` i `switchMap` (funkcje mapujące Observables z biblioteki **ngrx**)? Kiedy którego z nich powinno się używać?

# Zadanie 4 - Teoria

Wyjaśnij, jak działa operator spread. Co to jest immutable state / immutable variable? Dlaczego oba te koncepty są niesamowicie ważne w kontekście ngRx?

# Zadanie 5 - Praktyka

Stwórz serwis HTTP w folderze `src/utils/http.service.ts` i użyj https://www.wordsapi.com/, aby pobierać dane o konkretnym słowie do magazynu i wyświetlać je w aplikacji. Stwórz nowy moduł wraz z komponentem (nazwij je "words"). Stwórz odpowiednie efekty, fasadę, reduktor itd.

Upewnij się, że magazyn odzwierciedla stan ładowania danych, który będzie wyglądał mniej więcej tak:

```javascript
interface WordsState {
  loading: boolean;
  data: WordsData;
}
```

# Zadanie 6 - Praktyka

Zmodyfikuj kod z zadania 5 tak aby uzytkownik mogl wprowadzac wlasne slowo w inpucie (skorzystaj z ReactiveForms). Nastpenie po kliknieciu przyciku `Get Word` wykonaj odpowiedni call do API i zwroc dane z API. Dodaj rowniez obsluge bledow (dodaj typ bledu).

# Zadanie 7 - Teoria

1. **Koncepty podstawowe**: Co to jest "store" w kontekście ngRx i jakie jest jego główne zadanie?

2. **Akcje, Reducery i Efekty**:
   a. Jakie jest przeznaczenie akcji w ngRx?
   b. Opisz, jak działa reducer i jakie jest jego główne zadanie.
   c. Czym są efekty w ngRx i dlaczego są one ważne w kontekście asynchronicznych operacji?

3. **Selektory i Optymalizacja**:
   a. Czym jest selektor w ngRx i jakie są jego korzyści?
   b. Jak można używać selektorów do optymalizacji wydajności aplikacji?
   c. Dlaczego używanie niemutowalnych struktur danych jest ważne w kontekście ngRx i jakie narzędzia lub praktyki pomagają w zachowaniu niemutowalności?

# Zadanie 8 - Praktyka

## Projekt 'Zarządzanie zadaniami':

### Opis: Utwórz aplikację do zarządzania listą zadań.

### Wymagania:
- Użytkownik powinien mieć możliwość dodawania nowych zadań.
- Użytkownik powinien mieć możliwość oznaczania zadań jako ukończonych.
- Użytkownik powinien mieć możliwość usuwania zadań.

### Kroki:

- Utwórz akcje dla dodawania zadania, oznaczania zadania jako ukończonego i usuwania zadania.
- Utwórz reducery obsługujące powyższe akcje.
- Utwórz selektory, które pozwolą na pobieranie listy wszystkich zadań, listy ukończonych zadań oraz listy nieukończonych zadań.
- Użyj efektów, aby np. zapisywać zadania w "bazie danych" w Local Storage (lub tzw metaReducer-ow).

