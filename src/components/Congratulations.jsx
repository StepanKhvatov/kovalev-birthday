import CongratulationCard from "./CongratulationCard";
import congratulationsStyles from "../styles/Congratulations.module.css";

const Congratulations = ({ data, loadingData }) => {
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
                color={item.color}
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
