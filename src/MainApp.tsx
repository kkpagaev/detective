import { MapComponent } from "./Map";
import { SideBar } from "./SideBar";
import { useAppContext } from "./context/app-context";
import { useMapEntries } from "./mapEntries";
import officeMap from "./assets/office2.png"
import { InterrogationComponent } from "./Interrogation";
import { Slider } from "./Slider";
import { LeadsList } from "./Leads";

export const Main = () => {
  const { loaded, state } = useAppContext();

  const mapEntries = useMapEntries();

  if (mapEntries === undefined) {
    return <SideBar
          leadDescription='bar'
        />

  }

  if (!loaded) {
    return <div>Loading...</div>
  }

  if(state.level === 3) {
    return (
      <div className='container m-auto grid grid-cols-3'>
        <div className="bg-gray-100 p-8 col-span-3 h-screen">
          <InterrogationComponent mapEntries={mapEntries} />
        </div>
      </div>
    );
  }

  if(state.level === 4) {
    return (
      <div className='container m-auto grid grid-cols-3'>
        <div className="bg-gray-100 p-8 col-span-2 h-screen">
          <LeadsList />
        </div>
      </div>
    );
  }
  
  return (
    <div className='container m-auto grid grid-cols-3'>
      <div className="bg-gray-100 p-8 col-span-3 h-screen">
        <MapComponent mapEntries={mapEntries} imageUrl={officeMap} />
        {state.level === 2 ? <Slider /> : null}
      </div>
    </div>
  );
}
