import tigerImage from "../images/tiger.png";
import sportStyles from "../styles/Sport.module.css";
import pumpItImage from "../images/pumpIt.png";
import sportImage from "../images/sport.jpg";
import { isMobile } from "react-device-detect";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Sport = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={sportStyles.section}>
      <div className="container">
        <div className={sportStyles.content}>
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s",
            }}
            className={sportStyles["title-container"]}
          >
            <h2 className={`${sportStyles.title} title`}>успешный спортсмен</h2>
            <p className={sportStyles.description}>
              Все успешные спортсмены целеустремленные и всегда добиваются своей
              цели
            </p>
          </div>
          <div className={sportStyles["content-container"]}>
            <div className={sportStyles["video-container"]}>
              {!isMobile ? (
                <video
                  style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s",
                  }}
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
                </video>
              ) : (
                <img
                  style={{
                    transform: isInView ? "none" : "translateY(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.5s",
                  }}
                  src={sportImage}
                  className={sportStyles["content-block"]}
                  alt="sport"
                />
              )}

              <img src={tigerImage} alt="tiger" className={sportStyles.tiger} />
            </div>
            <p className={sportStyles.vs}>VS</p>
            <img
              style={{
                transform: isInView ? "none" : "translateY(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s",
              }}
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
