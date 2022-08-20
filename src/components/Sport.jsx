import tigerImage from "../images/tiger.png";
import sportStyles from "../styles/Sport.module.css";
import pumpItImage from "../images/pumpIt.png";
import sportVideo from "../video/2022-08-21 01.43.49.mp4";

const Sport = () => {
  return (
    <section className={sportStyles.section}>
      <div className="container">
        <div className={sportStyles.content}>
          <div className={sportStyles["title-container"]}>
            <h2 className={`${sportStyles.title} title`}>успешный спортсмен</h2>
            <p className={sportStyles.description}>
              Все успешные спортсмены целеустремленные{" "}
            </p>
          </div>
          <div className={sportStyles["content-container"]}>
            <div className={sportStyles["video-container"]}>
              <video
                className={sportStyles["content-block"]}
                src={sportVideo}
                title="sport"
                muted
                autoPlay
              />
              <img src={tigerImage} alt="tiger" className={sportStyles.tiger} />
            </div>
            <p className={sportStyles.vs}>VS</p>
            <img
              src={pumpItImage}
              alt="pump"
              className={sportStyles["content-block"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sport;
