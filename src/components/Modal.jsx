import { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "./Portal";
import modalStyles from "../styles/Modal.module.css";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const { show, setShow, children } = props;

  useEffect(() => {
    if (show) {
      const onEscapeKeydown = (event) => {
        if (event.code === `Escape`) {
          setShow(false);
        }
      };

      window.addEventListener(`keydown`, onEscapeKeydown);

      return () => {
        window.removeEventListener(`keydown`, onEscapeKeydown);
      };
    }

    return undefined;
  }, [show, setShow]);

  return (
    <CSSTransition
      in={show}
      timeout={100}
      classNames="modal"
      mountOnEnter
      unmountOnExit
    >
      <Portal>
        <ModalOverlay setShow={setShow}>
          <div className={`${modalStyles.modal} modal-container`}>
            {children}
          </div>
        </ModalOverlay>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
