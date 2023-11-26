import './App.css'
import { MapComponent } from './Map'
import { AppContextProvider } from './context/AppContextProvider'
import { MapEntries } from './mapEntries'
import officeMap from "./assets/office2.png"
import { SideBar } from './SideBar'
import { useAppContext } from "./context/app-context";

function App() {
  const { state } = useAppContext();

  return (
    <>
      <AppContextProvider>
        <div className='container m-auto grid grid-cols-3'> 
          <div className=''> 
            <SideBar
              leadDescription='bar'
            />
          </div>
          <div className="bg-gray-100 p-8 col-span-2 h-screen">
            <MapComponent mapEntries={MapEntries()[state.level - 1]} imageUrl={officeMap}/>
          </div>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
