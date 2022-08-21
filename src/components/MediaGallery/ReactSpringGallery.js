import React, { useEffect, useState, useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import PrevChevron from "../../images/prev.svg";
import NextChevron from "../../images/next.svg";

const useBreakpoint = (breakpoint) => {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener(`resize`, handleResize);

    handleResize();

    return () => {
      window.removeEventListener(`resize`, handleResize);
    };
  }, []);

  return !width || width >= BREAKPOINTS[breakpoint];
};

function ReactSpringGallery({ media, activeSlide = 0, setActiveSlide }) {
  const isDesktop = useBreakpoint(`md`);

  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }

    if (isDesktop) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, [isDesktop]);
  const ref = useRef(activeSlide);

  const [props, api] = useSprings(media.length, (i) => ({
    x: i === activeSlide ? 0 : width * (i - activeSlide),
    display: i === activeSlide ? `block` : `none`,
  }));

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (active && Math.abs(mx) > width / 10) {
        ref.current = clamp(
          ref.current + (xDir > 0 ? -1 : 1),
          0,
          media.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < ref.current - 1 || i > ref.current + 1)
          return { display: `none` };
        const x = (i - ref.current) * width + (active ? mx : 0);
        setActiveSlide(ref.current);
        return { x, display: `block` };
      });
    }
  );

  const setSlidePosition = () =>
    api.start((i) => {
      if (i < ref.current - 1 || i > ref.current + 1)
        return { display: `none` };

      const x = i === ref.current ? 0 : width * (i - ref.current);
      return { x, display: `block` };
    });

  const mediaLength = media.length;
  useEffect(() => {
    if (ref.current !== activeSlide) {
      const next = activeSlide > ref.current;
      const dirMultiplier = next ? 1 : -1;
      for (
        let index = ref.current;
        next ? index <= activeSlide : index >= activeSlide;
        index += dirMultiplier
      ) {
        if (index >= 0 && index < mediaLength) {
          ref.current = index;
          setSlidePosition();
        }
      }
    }
  }, [activeSlide]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {mediaLength > 1 && (
        <NavItem
          next={false}
          onClick={() => {
            ref.current = ref.current ? ref.current - 1 : 0;
            setActiveSlide(ref.current);
            setSlidePosition();
          }}
        />
      )}
      {props.map((item, index) => {
        const { x, display } = item;

        const mediaObj = media[index];

        const isHidden = display.get() === `none` && activeSlide !== index;

        if (isHidden) return null;
        return (
          <animated.div
            {...bind()}
            key={`${mediaObj.id}-${index}`}
            style={{
              display,
              x,
              position: "absolute",
              overflow: "hidden",
              width: "100%",
              borderRadius: "40px",
              height: "100%",
            }}
          >
            <img
              src={mediaObj}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "95vh",
                pointerEvents: "none",
                touchAction: "none",
                userSelect: "none",
                objectFit: "cover",
              }}
              alt="startup"
            />

            {isHidden ? null : <></>}
          </animated.div>
        );
      })}
      {mediaLength > 1 && (
        <NavItem
          next={true}
          onClick={() => {
            const lastItem = media.length - 1;
            ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
            setActiveSlide(ref.current);
            setSlidePosition();
          }}
        />
      )}
    </div>
  );
}

export default ReactSpringGallery;

const clamp = (number, lower, upper) => {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
};

// true = next, false = prev
const NavItem = ({ next, onClick }) => (
  <div
    style={{
      zIndex: 10,
      padding: "5px",
      right: next ? "8px" : "auto",
      left: next ? "auto" : "8px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <div
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px",
        background: "rgba(0, 0, 0, 0.1)",
        height: "50px",
        cursor: "pointer",
        borderRadius: "100%",
      }}
    >
      {next ? (
        <img src={NextChevron} style={{ width: "40px" }} alt="next" />
      ) : (
        <img src={PrevChevron} style={{ width: "40px" }} alt="prev" />
      )}
    </div>
  </div>
);

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  xl: 1024,
  xl: 1280,
  "2xl": 1536,
};
