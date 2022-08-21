import father from "../images/father.jpg";
import baboon from "../images/baboon.png";
import fatherStyles from "../styles/Father.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Father = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={fatherStyles.section}>
      <div style={{ position: "relative" }} className="container">
        <img src={baboon} alt="baboon" className={fatherStyles.baboon} />
        <div className={fatherStyles.content}>
          <div
            style={{
              transform: isInView ? "" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s",
            }}
            className={fatherStyles["image-container"]}
          >
            <img src={father} alt="father" className={fatherStyles.image} />
          </div>
          <div
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s",
            }}
            ref={ref}
            className={fatherStyles["title-container"]}
          >
            <h2 className={`${fatherStyles.title} title`}>молодой отец</h2>
            <p className={fatherStyles.subtitle}>
              Молодые мамы хороши. Молодые отцы тоже, знаете ли, ничего ;)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Father;
