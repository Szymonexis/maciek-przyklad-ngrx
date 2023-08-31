// W modelu zapisujemy interface oraz const przedstawiajace initialState danego modulu store'a
// Takze tutaj mozna wstawiac enumy, typy, interfejsy, krotki, consty itd. itp. zwiazane z danym modulem

export interface SetCounterPayload {
  counterValue: number;
}

export interface CounterState {
  currentValue: number;
}

export const initialState: CounterState = {
  currentValue: 0,
};
