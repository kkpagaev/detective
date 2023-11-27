import { MapComponent } from "./Map";
import { SideBar } from "./SideBar";
import { useAppContext } from "./context/app-context";
import { MapEntries } from "./mapEntries";
import officeMap from "./assets/office2.png"

export const Main = () => {
  const allMapEntries = MapEntries();

  const { state, loaded } = useAppContext();

  if (!loaded) {
    return <div>Loading...</div>
  }
  return (
    <div className='container m-auto grid grid-cols-3'>
      <div className=''>
        <SideBar
          leadDescription='bar'
        />
      </div>
      <div className="bg-gray-100 p-8 col-span-2 h-screen">
        <MapComponent mapEntries={allMapEntries[state.level - 1]} imageUrl={officeMap} />
      </div>
    </div>
  );
}
