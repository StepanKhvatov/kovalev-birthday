import tigerImage from "../images/tiger.png";
import sportStyles from "../styles/Sport.module.css";
import pumpItImage from "../images/pumpIt.png";
import ReactPlayer from "react-player";

const Sport = () => {
  return (
    <section className={sportStyles.section}>
      <div className="container">
        <div className={sportStyles.content}>
          <div className={sportStyles["title-container"]}>
            <h2 className={`${sportStyles.title} title`}>успешный спортсмен</h2>
            <p className={sportStyles.description}>
              Все успешные спортсмены целеустремленные и всегда добиваются своей
              цели
            </p>
          </div>
          <div className={sportStyles["content-container"]}>
            <div className={sportStyles["video-container"]}>
              {/* <video
                className={sportStyles["content-block"]}
                title="sport"
                muted
                autoPlay
                loop
              >
                <source
                  src={
                    "https://wsapi.zenfuse.io/uploads/2022_08_21_01_43_49_890240a7f8.mp4"
                  }
                  type="video/mp4"
                />
              </video> */}
              <div className={sportStyles["content-block"]}>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  playing
                  loop
                  muted
                  url="https://wsapi.zenfuse.io/uploads/2022_08_21_01_43_49_890240a7f8.mp4"
                />
              </div>

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
