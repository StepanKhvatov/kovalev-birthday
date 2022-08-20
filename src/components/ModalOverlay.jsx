import { useState, useEffect, useRef } from "react";
import modalOverlayStyles from "../styles/ModalOverlay.module.css";

const useOverflow = (ref) => {
  const [isOverflow, setIsOverflow] = useState(null);

  useEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current.scrollHeight > current.clientHeight;

      setIsOverflow(hasOverflow);
    };

    if (current) {
      if (`ResizeObserver` in window) {
        new ResizeObserver(trigger).observe(current);
      }

      trigger();
    }
  }, [ref]);

  return isOverflow;
};

const ModalOverlay = ({ children, setShow }) => {
  const containerRef = useRef();

  const isOverflow = useOverflow(containerRef);

  return (
    <div
      ref={containerRef}
      onClick={() => setShow(false)}
      style={{
        alignItems: isOverflow ? "flex-start" : "center",
        overflowY: isOverflow ? "scroll" : "hidden",
      }}
      className={modalOverlayStyles["modal-overlay"]}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
