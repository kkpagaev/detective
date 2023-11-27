import { MapComponent } from "./Map";
import { SideBar } from "./SideBar";
import { useAppContext } from "./context/app-context";
import { useMapEntries } from "./mapEntries";
import officeMap from "./assets/office2.png"
import { Slider } from "./Slider";

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
  return (
    <div className='container m-auto grid grid-cols-3'>
      <div className=''>
        <SideBar
          leadDescription='bar'
        />
      </div>
      <div className="bg-gray-100 p-8 col-span-2 h-screen">
        <MapComponent mapEntries={mapEntries} imageUrl={officeMap} />
        {state.level === 2 ? <Slider /> : null}
      </div>
    </div>
  );
}

// 13 00 - максим зайшов в серверну кімнату і вставив флешку
// 13 04 - софія спускається на ліфті
// 9 00 -- 13 00 ----- 18 00
