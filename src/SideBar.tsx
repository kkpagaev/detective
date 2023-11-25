import { useAppContext } from "./context/app-context";

export const SideBar = () => {
  const { state, setState } = useAppContext();

  const addLead = () => {
    setState({ ...state, leads: [...state.leads, "bar"] });
  }

  return <div className="h-full p-10 flex flex-col gap-12 bg-gray-200 border-gray-500 border border-10">
    <h2 className="flex justify-center text-lg">
      Sidebar
    </h2>
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
