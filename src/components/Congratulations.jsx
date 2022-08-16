import { useEffect, useState } from "react";
import CongratulationCard from "./CongratulationCard";
import congratulationsStyles from "../styles/Congratulations.module.css";

const Congratulations = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);

    fetch("https://kovalev-congratulations.vercel.app/api/congratulations")
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
        console.error(error.message);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }, []);

  return (
    <section className={congratulationsStyles.section}>
      <div className={`${congratulationsStyles.container} container`}>
        {!loadingData &&
          !!data.length &&
          data.map((item, index) => {
            return (
              <CongratulationCard
                text={item.text}
                name={item.name}
                index={index}
                key={item.id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Congratulations;
