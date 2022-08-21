import { useState, useEffect } from "react";
import startUpStyles from "../styles/StartUp.module.css";
import zenfuseHorizontal from "../images/zenfuse-horizontal.jpg";
import dexsportHorizontal from "../images/dexsport-horizontal.jpg";
import subclubHorizontal from "../images/subclub-horizontal.jpg";
import zenfuseVertical from "../images/zenfuse-vertical.jpg";
import dexsportVertical from "../images/dexsport-vertical.jpg";
import subclubVertical from "../images/subclub-vertical.jpg";
import melon from "../images/melon.png";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Carousel from "nuka-carousel";
import arrow from "../images/arrow.svg";

const useBreakpoint = (breakpoint) => {
  const [reached, setReached] = useState(false);

  useEffect(() => {
    function checkReached() {
      setReached(window.innerWidth <= breakpoint);
    }

    window.addEventListener(`resize`, checkReached);

    checkReached();

    return () => window.removeEventListener(`resize`, checkReached);
  }, [breakpoint]);

  return reached;
};

const NavItem = ({ rotate, onClick, disabled }) => (
  <button
    disabled={disabled}
    className={`${startUpStyles.arrow} ${
      rotate ? startUpStyles["arrow-left"] : startUpStyles["arrow-right"]
    }`}
    onClick={onClick}
    type="button"
  >
    <img src={arrow} className={startUpStyles["arrow-image"]} alt="arrow" />
  </button>
);

const StartUp = () => {
  const isMobile = useBreakpoint(480);

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
        <div className={startUpStyles["carousel-container"]}>
          <Carousel
            slidesToShow={1}
            slidesToScroll={1}
            cellSpacing={30}
            renderCenterLeftControls={({ previousSlide, currentSlide }) => {
              return (
                <NavItem
                  onClick={previousSlide}
                  rotate
                  disabled={currentSlide === 0}
                />
              );
            }}
            renderCenterRightControls={({ nextSlide, currentSlide }) => {
              return (
                <NavItem onClick={nextSlide} disabled={currentSlide === 2} />
              );
            }}
            renderBottomCenterControls={() => {
              return null;
            }}
          >
            <div className={startUpStyles.slide}>
              <img
                className={startUpStyles["slide-image"]}
                src={isMobile ? zenfuseVertical : zenfuseHorizontal}
                alt="project"
              />
            </div>
            <div className={startUpStyles.slide}>
              <img
                className={startUpStyles["slide-image"]}
                src={isMobile ? dexsportVertical : dexsportHorizontal}
                alt="project"
              />
            </div>
            <div className={startUpStyles.slide}>
              <img
                className={startUpStyles["slide-image"]}
                src={isMobile ? subclubVertical : subclubHorizontal}
                alt="project"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StartUp;
