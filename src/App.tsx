import { useState } from 'react'
import './App.css'
import { Header } from './Header'
import { Main } from './MainApp'
import { Navigation } from './Navigation'
import { Help } from './Help'
import { useCanGoToTheNextLevel, getLevelName } from './SideBar'
import { useAppContext } from './context/app-context'

function App() {
  const [help, setHelp] = useState(false);
  const canGoToTheNextLevel = useCanGoToTheNextLevel();
  const { state, setState } = useAppContext();

  // Transition to a new level only if all questions were asked and a sufficient number of points was scored
  const onNewLevel = () => {
    if (canGoToTheNextLevel) {
      const nextLevel = state.level + 1;
      setHelp(true);
      setState({ ...state, points: 0, level: nextLevel, levelName: getLevelName(nextLevel) });
    }
  }

  return (
    <>
      {help && state.level > 0 && state.level < 4 && <Help close={() => setHelp(false)} />}
      <Header />
      <div className='container m-auto xl:pl-24 xl:pr-24 grid grid-cols-3'>
        <div className="bg-zinc-300 xl:p-2 col-span-3">
          <Main />
        </div>
      </div>
      {state.level !== 0 && <Navigation onNewLevel={onNewLevel} />}
    </>
  )
}

export default App
