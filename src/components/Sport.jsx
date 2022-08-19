import sportStyles from "../styles/Sport.module.css";

const Sport = () => {
  return (
    <section>
      <div className="container">
        <div className={sportStyles.content}>
          <div className={sportStyles["title-container"]}>
            <h2 className={`${sportStyles.title} title`}>успешный спортсмен</h2>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Sport;
