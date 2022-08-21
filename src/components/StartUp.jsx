import startUpStyles from "../styles/StartUp.module.css";
import MediaGallery from "./MediaGallery";
import Zenfuse from "../images/zenfuse.jpg";
import Dexsport from "../images/dexsport.jpg";
import Subclub from "../images/subclub.jpg";
import melon from "../images/melon.png";
import { useRef } from "react";
import { useInView } from "framer-motion";

const StartUp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={startUpStyles.section}>
      <div style={{ position: "relative" }} className="container">
        <img className={startUpStyles.melon} src={melon} alt="melon" />
        <h2
          style={{
            transform: isInView ? "none" : "translateY(-40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s",
          }}
          ref={ref}
          className={`${startUpStyles.title} title`}
        >
          Стартапер
        </h2>
        <MediaGallery media={[Zenfuse, Dexsport, Subclub]} />
      </div>
    </section>
  );
};

export default StartUp;
