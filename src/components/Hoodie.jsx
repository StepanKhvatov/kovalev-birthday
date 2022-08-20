import { useState } from "react";
import hoodieStyles from "../styles/Hoodie.module.css";
import Modal from "./Modal";
import hoodie from "../images/hoodie.jpg";
import Button from "./Button";
import arrowImage from "../images/arrow.png";
import { motion } from "framer-motion";

const Hoodie = () => {
  const [showModal, setShowModal] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const onSubmit = (event) => {
    setLoadingSubmit(true);

    event.preventDefault();

    const { name, contacts } = event.target;

    fetch(`${process.env.REACT_APP_API_URL}/hoodie`, {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        contacts: contacts.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((res) => {
        if (res.success) {
          event.target.name.value = "";
          event.target.contacts.value = "";
        }

        return res;
      })
      .catch((error) => {
        console.error(error.message || error);
      })
      .finally(() => {
        setLoadingSubmit(false);
      });
  };

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
            animate={{
              scale: [1, 0.85, 1],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            src={arrowImage}
            className={hoodieStyles["arrow-image"]}
            alt="arrow"
          />
          <p className={hoodieStyles["arrow-title"]}>Нажми на худи</p>
        </div>
      </div>
      <Modal show={showModal} setShow={setShowModal}>
        <div className={hoodieStyles["modal-container"]}>
          <div className={hoodieStyles["title-container"]}>
            <h3 className={hoodieStyles["modal-title"]}>Поздравляем!</h3>
            <h3 className={hoodieStyles["modal-title"]}>
              Вы выиграли худи Zenfuse
            </h3>
            <p className={hoodieStyles["modal-subtitle"]}>
              *стоимость доставки 150 USDT
            </p>
          </div>
          <form onSubmit={onSubmit} className={hoodieStyles["form"]}>
            <div className={hoodieStyles["inputs-container"]}>
              <input
                name="name"
                required
                placeholder="Ваше имя"
                className={hoodieStyles["input"]}
              />
              <input
                name="contacts"
                required
                placeholder="Контакт для связи"
                className={hoodieStyles["input"]}
              />
            </div>
            <Button disabled={loadingSubmit}>
              {loadingSubmit ? "Отправляем..." : "Отправить"}
            </Button>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default Hoodie;
