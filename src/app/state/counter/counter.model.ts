// W modelu zapisujemy interface oraz const przedstawiajace initialState danego modulu store'a
// Takze tutaj mozna wstawiac enumy, typy, interfejsy, krotki, consty itd. itp. zwiazane z danym modulem

export interface SetCounterPayload {
  mainValue: number;
}

export interface CounterState {
  mainValue: number;
}

export const initialState: CounterState = {
  mainValue: 0,
};
