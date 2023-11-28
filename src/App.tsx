import './App.css'
import { Header } from './Header'
import { Main } from './MainApp'
import { Navigation } from './Navigation'
import { AppContextProvider } from './context/AppContextProvider'

function App() {

  return (
    <>
      <AppContextProvider>
        <Header />
        <div className='container m-auto xl:pl-24 xl:pr-24 grid grid-cols-3'>
          <div className="bg-zinc-300 xl:p-8 col-span-3 h-screen">
            <Main />
          </div>
        </div>
        <Navigation />
      </AppContextProvider>
    </>
  )
}

export default App
