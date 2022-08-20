import { useState } from "react";
import hoodieStyles from "../styles/Hoodie.module.css";
import Modal from "./Modal";
import hoodie from "../images/hoodie.jpg";
import Button from "./Button";
import arrowImage from "../images/arrow.png";
import { motion, useTime, useTransform } from "framer-motion";

const Hoodie = () => {
  const [showModal, setShowModal] = useState(false);

  const time = useTime();
  const scale = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <section className={hoodieStyles.section}>
      <div style={{ position: "relative" }} className="container">
        <motion.div
          className={hoodieStyles["image-container"]}
          whileHover={{ scale: 1.02, rotate: 4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 250, damping: 10 }}
          onClick={() => setShowModal(true)}
        >
          <img src={hoodie} className={hoodieStyles.image} alt="hoodie" />
        </motion.div>

        <div className={hoodieStyles["arrow-container"]}>
          <motion.img
            // style={{ scale }}
            src={arrowImage}
            className={hoodieStyles["arrow-image"]}
            alt="arrow"
          />
          <p className={hoodieStyles["arrow-title"]}>Нажми на худи</p>
        </div>
      </div>
      <Modal show={showModal} setShow={setShowModal}>
        <div className={hoodieStyles["modal-container"]}>
          <h3 className={hoodieStyles["modal-title"]}>
            Поздравляем! Вы выиграли худи Zenfuse
          </h3>
          <Button>Отправить</Button>
        </div>
      </Modal>
    </section>
  );
};

export default Hoodie;
