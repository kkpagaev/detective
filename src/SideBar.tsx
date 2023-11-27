import { QUESTION_LIMIT } from "./Question";
import { useAppContext } from "./context/app-context";

// Points requirement to move to the next level is the same for all levels
const POINTS_REQUIREMENT = 20;

export type LeadEntry = {
  leadDescription: string
}

const useCanGoToTheNextLevel = () => {
  const { state } = useAppContext();
  const askedAllQuestions = state.askedQuestions.filter(askedLevelItem => askedLevelItem.nAskedQuestions < QUESTION_LIMIT).length === 0;
  if (state.points >= POINTS_REQUIREMENT && askedAllQuestions) {
    return true
  }
  return false
}

export const SideBar = (props: LeadEntry) => {
  const { state, setState, resetState } = useAppContext();
  const canGoToTheNextLevel = useCanGoToTheNextLevel();

  const addLead = () => {
    if (canGoToTheNextLevel) {
      setState({ ...state, leads: [...state.leads, props.leadDescription] });
    }
  }

  // Transition to a new level only if all questions were asked and a sufficient number of points was scored
  const onNewLevel = () => {
    const askedAllQuestions = state.askedQuestions.filter(askedLevelItem => askedLevelItem.nAskedQuestions < QUESTION_LIMIT).length === 0;
    if (state.points >= POINTS_REQUIREMENT && askedAllQuestions) {
      setState({ ...state, points: 0, level: state.level + 1 });
    }
  }

  return <div className="h-full p-10 flex flex-col gap-12 bg-gray-200 border-gray-500 border border-10">
    <h2 className="flex justify-center text-lg">
      Sidebar
    </h2>
    <div>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={resetState}>
        RESET STATE
      </button>
    </div>
    {
      canGoToTheNextLevel ?
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={onNewLevel}>
            NEW LEVEL
          </button>
        </div>
        : null
    }
    <div>
      <button className="" onClick={addLead}>
        add lead
      </button>
    </div>
    <div className="">
      <p>Points: {state.points}</p>
      <p>Level: {state.level}</p>
      <ul>
        {state.leads.map((lead, index) => {
          return <li key={index}>
            {lead}
          </li>
        })
        }
      </ul>

    </div>

  </div>
}
