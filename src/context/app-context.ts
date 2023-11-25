import { createContext, useContext } from "react";

export type AppState = {
  foo?: number
}

interface AppContextData {
  state: AppState,
  setState: (state: AppState) => void
}

export const AppContext = createContext<AppContextData>({
  state: {
    foo: 0
  },
  setState: (state) => {
    console.log(state);
  }
});

export const useAppContext = () => useContext(AppContext);
