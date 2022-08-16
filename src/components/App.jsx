import Banner from "../components/Banner";
import Congratulations from "./Congratulations";
import CreateCongratulation from "./CreateCongratulation";

function App() {
  return (
    <div className="App">
      <main>
        <Banner />
        <CreateCongratulation />
        <Congratulations />
      </main>
    </div>
  );
}

export default App;
