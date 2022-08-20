import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Race from "./Race";
import IllegalRacer from "./IllegalRacer";
import Pirate from "./Pirate";
import StartUp from "./StartUp";
import Sport from "./Sport";
import Father from "./Father";
import Congratulations from "./Congratulations";
import CreateCongratulation from "./CreateCongratulation";
import DoubleStrip from "./DoubleStrip";
import Hoodie from "./Hoodie";

const CongratulationsBlocks = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);

    fetch(process.env.REACT_APP_API_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((res) => {
        if (res.success) {
          return setData(res.data);
        }

        return res;
      })
      .catch((error) => {
        console.error(error?.message || error);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }, []);

  return (
    <>
      <CreateCongratulation setData={setData} />
      <Congratulations data={data} loadingData={loadingData} />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <main className="main">
        <DoubleStrip />
        <Banner />
        <Race />
        <IllegalRacer />
        <Pirate />
        <StartUp />
        <Sport />
        <Father />
        <Hoodie />
        <CongratulationsBlocks />
      </main>
    </div>
  );
}

export default App;
