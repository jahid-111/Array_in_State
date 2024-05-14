import "./App.css";
import TravalUniverse from "./NestedArray/TravalUniverse";
import Universe from "./NormalizedArray/Universe";
import Accordion from "./accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion></Accordion>
      <Universe></Universe>
      <TravalUniverse></TravalUniverse>
    </div>
  );
}

export default App;
