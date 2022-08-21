import raceStyles from "../styles/Race.module.css";
import { useSpring, animated } from "react-spring";
import cops from "../images/cops.png";
import brz from "../images/brz.png";
import cone from "../images/cone.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { isMobile } from "react-device-detect";
import drift from "../images/drift.jpg";

const fromCopsStyles = {
  left: "-1500px",
};
const toCopsStyles = {
  left: "2000px",
};

const fromBrzStyles = {
  left: "-600px",
};
const toBrzStyles = {
  left: "3300px",
};

const fromTitleStyles = {
  top: "30px",
  opacity: 0,
};

const toTitleStyles = {
  top: "160px",
  opacity: 1,
};

const fromConeStyles = { opacity: 0 };
const toConeStyles = { opacity: 1 };

const fromVideoStyles = {
  opacity: 0,
};
const toVideoStyles = {
  opacity: 1,
};

const Race = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView, entry } = useInView();

  const copsStyles = useSpring({
    from: fromCopsStyles,
    to: startAnimation ? toCopsStyles : fromCopsStyles,
    config: { duration: 4000 },
  });

  const coneStyles = useSpring({
    from: fromConeStyles,
    to: startAnimation ? toConeStyles : fromConeStyles,
    config: { duration: 600 },
    delay: 2800,
  });

  const videoStyles = useSpring({
    from: fromVideoStyles,
    to: startAnimation ? toVideoStyles : fromVideoStyles,
    config: { duration: 600 },
    delay: 2800,
  });

  const brzStyles = useSpring({
    from: fromBrzStyles,
    to: startAnimation ? toBrzStyles : fromBrzStyles,
    config: { duration: 4000 },
  });

  const titleStyles = useSpring({
    from: fromTitleStyles,
    to: startAnimation ? toTitleStyles : fromTitleStyles,
    config: { duration: 500 },
    delay: 2800,
  });

  useEffect(() => {
    if (inView && !startAnimation) {
      setStartAnimation(true);
    }
  }, [inView, startAnimation]);

  return (
    <section>
      <div className="container">
        <div className={raceStyles["images-block"]}>
          <h4 className={raceStyles.subtitle}>Кто такой Юра</h4>

          <animated.div
            className={raceStyles["video-container"]}
            style={videoStyles}
          >
            {!isMobile ? (
              <video
                src="https://wsapi.zenfuse.io/uploads/drift_7e6cff567f.mp4"
                className={raceStyles.video}
                muted
                autoPlay
              ></video>
            ) : (
              <img className={raceStyles.video} alt="drift" src={drift} />
            )}
          </animated.div>
          <animated.img
            src={cone}
            className={raceStyles.cone}
            style={coneStyles}
            alt="cone"
          />
          <animated.h2
            className={`title ${raceStyles.title}`}
            style={titleStyles}
          >
            гонщик-нелегал
          </animated.h2>

          <animated.img
            src={cops}
            className={raceStyles.cops}
            style={copsStyles}
            alt="cops"
          />
          <animated.img
            src={brz}
            className={raceStyles.brz}
            style={brzStyles}
            alt="brz"
          />
        </div>
        <div ref={ref}></div>
      </div>
    </section>
  );
};

export default Race;
