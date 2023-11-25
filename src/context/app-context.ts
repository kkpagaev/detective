import { createContext, useContext } from "react";

export type AppState = {
  level: number
  points: number
  leads: Array<string>
}

interface AppContextData {
  state: AppState,
  setState: (state: AppState) => void
}

export const defaultState = {
  level: 1,
  points: 0,
  leads: []
}

export const AppContext = createContext<AppContextData>({
  state: JSON.parse(JSON.stringify(defaultState)),
  setState: (state) => {
    console.log(state);
  }
});


export const useAppContext = () => useContext(AppContext);
