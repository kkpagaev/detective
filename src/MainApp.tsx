import { MapComponent, MapEntry } from "./Map";
import { useAppContext } from "./context/app-context";
import { useMapEntries } from "./mapEntries";
import officeMap from "./assets/office2.png"
import { InterrogationComponent, InterrogationEntry } from "./Interrogation";
import { Slider } from "./Slider";
import { LeadsList } from "./Leads";

export const Main = () => {
  const { loaded, state } = useAppContext();

  const mapEntries = useMapEntries();

  if (!loaded) {
    return <div>Loading...</div>
  }

  if (state.level === 3) {
    return <InterrogationComponent mapEntries={mapEntries as InterrogationEntry[]} />;
  }

  if (state.level === 4) {
    return <LeadsList />;
  }

  return (
    <>
      <MapComponent mapEntries={mapEntries as MapEntry[]} imageUrl={officeMap} />
      {state.level === 2 ? <Slider /> : null}
    </>
  );
}
