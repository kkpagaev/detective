import { createContext, useContext } from "react";
import { AskedLevelItem, AskedQuestion } from "../Question";

export type AppState = {
  level: number
  points: number
  leads: Array<string>
  askedQuestions: Array<Array<AskedLevelItem>>
}

interface AppContextData {
  state: AppState,
  setState: (state: AppState) => void
}

export const defaultState = {
  level: 1,
  points: 0,
  leads: [],
  askedQuestions: [
    [
        {
            title: "Олександр",
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
  ]
}

export const AppContext = createContext<AppContextData>({
  state: JSON.parse(JSON.stringify(defaultState)),
  setState: (state) => {
    console.log(state);
  }
});


export const useAppContext = () => useContext(AppContext);
