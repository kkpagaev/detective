import './App.css'
import { MapComponent } from './Map'
import { AppContextProvider } from './context/AppContextProvider'

function App() {
  return (
    <>
      <AppContextProvider>
        <div className="bg-gray-100 p-8 h-screen">
          <MapComponent />
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
