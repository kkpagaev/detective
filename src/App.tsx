import './App.css'
import { Main } from './Main'
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
