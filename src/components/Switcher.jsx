import { useState, useEffect } from "react";
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
  const myCanvas = document.getElementById("canvas");

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );

  myConfetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );

  myConfetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );

  myConfetti(
    Object.assign({}, defaults, {
      particleCount: 50,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
};

const secondFrame = () => {
  let isShowFallen = false;

  const myCanvas = document.getElementById("canvas");

  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  if (isShowFallen) {
    return;
  }

  const animationEnd = Date.now() + duration;

  const timeLeft = animationEnd - Date.now();

  const ticks = Math.max(200, 500 * (timeLeft / duration));

  skew = Math.max(0.8, skew - 0.001);

  myConfetti({
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

  isShowFallen = true;
};

const Switcher = () => {
  const [isOn, setIsOn] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(Date.now() + duration);

  const toggleSwitch = () => {
    setIsOn(!isOn);

    if (!isOn) {
      firstFrame();
      secondFrame();
    }
  };

  return (
    <div
      className={switcherStyles.switcher}
      active={String(isOn)}
      onClick={toggleSwitch}
    >
      <p className={switcherStyles.title}>{isOn ? "ON" : "OFF"}</p>
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
