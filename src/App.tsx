import './App.css'
import { Main } from './MainApp'
import { AppContextProvider } from './context/AppContextProvider'

function App() {

  return (
    <>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </>
  )
}

export default App
