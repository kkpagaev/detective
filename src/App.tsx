import './App.css'
import { Main } from './MainApp'
import { AppContextProvider } from './context/AppContextProvider'

function App() {

  return (
    <>
      <AppContextProvider>
        <div className='container m-auto xl:pl-24 xl:pr-24 grid grid-cols-3'>
          <div className="bg-gray-100 p-8 col-span-3 h-screen">
            <Main />
          </div>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
