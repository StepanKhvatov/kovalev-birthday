import { useState } from "react";
import pirateStyles from "../styles/Pirate.module.css";
import blurImage from "../images/blur.png";
import vintagePeopleImage from "../images/vintage-people.png";
import piratImage from "../images/pirat.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Pirate = () => {
  const [blur, setBlur] = useState(true);

  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, {
    once: true,
  });

  const imageInView = useInView(imageRef, {
    once: true,
  });

  return (
    <section className={pirateStyles.section}>
      <div className="container">
        <div className={pirateStyles.content}>
          <div
            ref={textRef}
            style={{
              transform: textInView ? "none" : "translateX(-200px)",
              opacity: textInView ? 1 : 0,
              transition: "all 0.5s",
            }}
            className={pirateStyles["title-container"]}
          >
            <h2 className={`${pirateStyles.title} title`}>Настоящий пират</h2>
            <p className={pirateStyles.subtitle}>
              Как говорят все пираты: «Йо-хо-хо и портовые
              <button
                className={pirateStyles.blur}
                onClick={() => setBlur(!blur)}
              >
                {blur ? (
                  <img
                    src={blurImage}
                    alt="шлюпки"
                    className={pirateStyles["blur-image"]}
                  ></img>
                ) : (
                  `шлюпки`
                )}
              </button>
              ». Ну или как-то так. Еще пираты ходят в кино только на пиратские
              фильмы и имеют сертификат об обучении.
            </p>
          </div>
          <div
            ref={imageRef}
            style={{
              transform: imageInView ? "none" : "translateY(-200px)",
              opacity: imageInView ? 1 : 0,
              transition: "all 0.5s",
            }}
            className={pirateStyles.card}
          >
            <img alt="Pirat" src={piratImage} className={pirateStyles.pirate} />
          </div>
          <img
            alt="people"
            src={vintagePeopleImage}
            className={pirateStyles.people}
          />
        </div>
      </div>
    </section>
  );
};

export default Pirate;
