import { useState } from "react";
import { useAppContext } from "./context/app-context";
import { useCanGoToTheNextLevel } from "./SideBar";
import { Notes } from "./Notes";
import { HelpNote } from "./HelpNote";

type Props = {
  onNewLevel: () => void
}
export const Navigation = ({ onNewLevel }: Props) => {
  const { state } = useAppContext();
  const [noteVisible, setNoteVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);
  const canGoToTheNextLevel = useCanGoToTheNextLevel();

  return <div className="fixed bottom-0 w-full z-50">
    <div className="container m-auto flex justify-end gap-2 pr-28">
      {
        canGoToTheNextLevel &&
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={onNewLevel}>
            Новий рівень
          </button>
        </div>
      }
      <button className="bg-yellow-500 transition-all hover:bg-yellow-700 text-zinc-800 font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setNoteVisible(!noteVisible)}>
        Зачіпки
      </button>
      {state.level !== 4 && <button className="bg-red-500 transition-all hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={() => setHelpVisible(!helpVisible)}>
        Допомога
      </button>}
      <div className="absolute transition-all duration-300 z-50" style={{
        bottom: noteVisible ? 0 : "-32rem"
      }}>
        <Notes close={() => setNoteVisible(false)} />
      </div>
      {state.level !== 4 && <div className="absolute transition-all duration-300 z-50" style={{
        bottom: helpVisible ? 0 : "-32rem"
      }}>
        <HelpNote close={() => setHelpVisible(false)} />
      </div>

      }
    </div>
  </div>
}
