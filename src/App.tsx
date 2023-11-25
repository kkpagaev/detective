import './App.css'
import sanyaImage from './assets/sanya.svg'
import { MapComponent, MapPopup } from './Map'
import { AppContextProvider } from './context/AppContextProvider'
import { mapEntries } from './mapEntries'
import officeMap from "./assets/office.png"

function App() {
  return (
    <>
      <AppContextProvider>
<MapPopup
    image={sanyaImage}
    title="Керівник IT відділу"
    content="content"
  />
        <div className="bg-gray-100 p-8 h-screen">
          <MapComponent mapEntries={mapEntries} imageUrl={officeMap}/>
        </div>
      </AppContextProvider>
    </>
  )
}

export default App
