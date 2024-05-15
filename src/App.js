import "./App.css";
import TravalUniverse from "./NestedArray/TravalUniverse";
import Universe from "./NormalizedArray/Universe";
import Accordion from "./accordion/Accordion";
import AddTask from "./statelLogic/AddTask";

function App() {
  return (
    <div className="App">

      <AddTask></AddTask>




      <Accordion></Accordion>
      <Universe></Universe>
      <TravalUniverse></TravalUniverse>
    </div>
  );
}

export default App;
