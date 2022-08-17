import Banner from "../components/Banner";
import Race from "./Race";
import IllegalRacer from "./IllegalRacer";
import Pirate from "./Pirate";
import StartUp from "./StartUp";
import Congratulations from "./Congratulations";
import CreateCongratulation from "./CreateCongratulation";

function App() {
  return (
    <div className="App">
      <main>
        <Banner />
        <Race />
        <IllegalRacer />
        <Pirate />
        <StartUp />
        <CreateCongratulation />
        <Congratulations />
      </main>
    </div>
  );
}

export default App;
