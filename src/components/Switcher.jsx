import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import yura from "../images/Yura.jpg";
import yuraSmile from "../images/Yura-smile.jpg";
import switcherStyles from "../styles/Switcher.module.css";

const spring = {
  type: "spring",
  stiffness: 750,
  damping: 40,
};

const duration = 15 * 1000;

let skew = 1;

const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

const firstFrame = () => {
  confetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );

  confetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );

  confetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );

  confetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
};

let snowAnimationEnd;

const secondFrame = () => {
  const timeLeft = snowAnimationEnd - Date.now();

  const ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      y: Math.random() * skew - 0.2,
    },
    colors: ["#ffffff"],
    shapes: ["circle"],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  });

  if (timeLeft > 0) {
    return requestAnimationFrame(secondFrame);
  }
};

const Switcher = () => {
  const [isOn, setIsOn] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);

    if (!isOn) {
      firstFrame();

      if (!animationEnd) {
        snowAnimationEnd = Date.now() + duration;

        setAnimationEnd(true);

        secondFrame();
      }
    }
  };

  return (
    <div
      className={switcherStyles.switcher}
      active={String(isOn)}
      onClick={toggleSwitch}
    >
      <div className={switcherStyles["title-layout"]}>
        <p
          style={{ opacity: isOn ? "1" : "0" }}
          className={switcherStyles.title}
        >
          ON
        </p>
        <p
          style={{ opacity: !isOn ? "1" : "0" }}
          className={switcherStyles.title}
        >
          OFF
        </p>
      </div>
      <motion.div
        className={switcherStyles["switcher-handler"]}
        layout
        transition={spring}
      >
        <img
          alt="Yura-sempai"
          src={isOn ? yuraSmile : yura}
          className={switcherStyles.image}
          draggable={false}
        />
      </motion.div>
    </div>
  );
};

export default Switcher;
