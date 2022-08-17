import pirateStyles from "../styles/Pirate.module.css";

const Pirate = () => {
  return (
    <section className={pirateStyles.section}>
      <div className="container">
        <div className={pirateStyles.content}>
          <div className={pirateStyles["title-container"]}>
            <h2 className={`${pirateStyles.title} title`}>Настоящий пират</h2>
            <p className={pirateStyles.subtitle}>йо-хо-хо портовые шлюхи</p>
          </div>
          <div className={pirateStyles.card}></div>
        </div>
      </div>
    </section>
  );
};

export default Pirate;
