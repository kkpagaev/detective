import { createContext, useContext } from "react";
import { AskedLevelItem } from "../Question";

export type AppState = {
  level: number
  points: number
  leads: Array<string>
  visitedCameras: Array<string>
  askedQuestions: Array<AskedLevelItem>
}

interface AppContextData {
  state: AppState,
  loaded: boolean,
  setState: (state: AppState) => void,
  resetState: () => void
}

export const defaultState = <AppState>{
  level: 1,
  points: 0,
  leads: [],
  visitedCameras: [],
  askedQuestions: [{
    title: "Олександр",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Петро",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Максим",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Віктор",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  },
  {
    title: "Софія",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Анна",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false
      },
      {
        isAsked: false,
        isLeadingAsked: false
      }
    ]
  },
  {
    title: "Юлія",
    nAskedQuestions: 0,
    askedQuestions: [
      {
        isAsked: false,
        isLeadingAsked: false
      },
      {
        isAsked: false
      }
    ]
  }
  ]
}

export const AppContext = createContext<AppContextData>({
  state: JSON.parse(JSON.stringify(defaultState)) as AppState,
  setState: (state) => {
    console.log(state);
  },
  loaded: false,
  resetState: () => { },
});

export const useAppContext = () => useContext(AppContext);
