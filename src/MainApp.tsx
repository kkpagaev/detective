import { MapComponent, MapEntry } from "./Map";
import { useAppContext } from "./context/app-context";
import { useMapEntries } from "./mapEntries";
import officeMap from "./assets/office2.png"
import { InterrogationComponent, InterrogationEntry } from "./Interrogation";
import { Slider } from "./Slider";
import { LeadsList } from "./Leads";
import { Intro } from "./Introduction";

export const Main = () => {
  const { loaded, state } = useAppContext();

  const mapEntries = useMapEntries();

  if (!loaded) {
    return <div>Loading...</div>
  }

  if (state.level === 0) {
    return <Intro />
  }

  if (state.level === 3) {
    return <InterrogationComponent mapEntries={mapEntries as InterrogationEntry[]} />;
  }

  if (state.level === 4) {
    return <LeadsList />;
  }

  return (
    <>
      <div className="mb-16">
        {state.level === 2 ? <Slider /> : null}
      </div>
      <MapComponent mapEntries={mapEntries as MapEntry[]} imageUrl={officeMap} />
    </>
  );
}
