import startUpStyles from "../styles/StartUp.module.css";

const StartUp = () => {
  return (
    <section className={startUpStyles.section}>
      <div className="container">
        <h2 className={`${startUpStyles.title} title`}>Стартапер</h2>
        <div className={startUpStyles.card}></div>
      </div>
    </section>
  );
};

export default StartUp;
