import './App.css'
import { MapComponent } from './Map'
import { AppContextProvider } from './context/AppContextProvider'
import { MapEntries } from './mapEntries'
import officeMap from "./assets/office2.png"
import { SideBar } from './SideBar'

function App() {

  const allMapEntries = MapEntries();

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
            <MapComponent mapEntries={allMapEntries} imageUrl={officeMap}/>
          </div>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
