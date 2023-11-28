import { useState } from "react";
import { useAppContext } from "./context/app-context";
import { getLevelName, useCanGoToTheNextLevel } from "./SideBar";
import { Notes } from "./Notes";
import { HelpNote } from "./HelpNote";

export const Navigation = () => {
  const { resetState, state, setState } = useAppContext();
  const [noteVisible, setNoteVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);
  const canGoToTheNextLevel = useCanGoToTheNextLevel();

  // Transition to a new level only if all questions were asked and a sufficient number of points was scored
  const onNewLevel = () => {
    if (canGoToTheNextLevel) {
      const nextLevel = state.level + 1;
      setState({ ...state, points: 0, level: nextLevel, levelName: getLevelName(nextLevel) });
    }
  }

  return <div className="fixed bottom-0 w-full">
    <div className="container m-auto flex justify-end gap-2">
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setNoteVisible(!noteVisible)}>
        Зачіпки
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setHelpVisible(!helpVisible)}>
        Допомога
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={resetState}>
        RESET STATE
      </button>
      {
        canGoToTheNextLevel &&
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={onNewLevel}>
            Новий рівень
          </button>
        </div>
      }
      <div className="absolute transition-all duration-300" style={{
        bottom: noteVisible ? 0 : "-32rem"
      }}>
        <Notes close={() => setNoteVisible(false)} />
      </div>
      <div className="absolute transition-all duration-300" style={{
        bottom: helpVisible ? 0 : "-32rem"
      }}>
        <HelpNote close={() => setHelpVisible(false)} />
      </div>
    </div>
  </div>
}
