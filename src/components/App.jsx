import Banner from "../components/Banner";
import Congratulations from "./Congratulations";
import appStyles from "../styles/App.module.css";

function App() {
  return (
    <div className="App">
      <main>
        <Banner />
        <Congratulations />
      </main>
    </div>
  );
}

export default App;
