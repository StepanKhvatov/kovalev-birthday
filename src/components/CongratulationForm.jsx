import { useState } from "react";
import { motion } from "framer-motion";
import congratulationFormStyles from "../styles/CongratulationForm.module.css";

const CongratulationForm = ({ setData }) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    const { text, name } = event.target;

    setLoadingSubmit(true);

    fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      body: JSON.stringify({ text: text.value, name: name.value }),
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
          event.target.text.value = "";

          return setData((prevState) => [...prevState, res.data]);
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
    <form onSubmit={onSubmit} className={congratulationFormStyles.form}>
      <textarea
        required
        name="text"
        className={congratulationFormStyles.textarea}
        placeholder="Напиши свое поздравление (не забудь добавить эмодзи)"
      />
      <input
        required
        name="name"
        className={congratulationFormStyles.input}
        placeholder="От кого"
      />
      <motion.button
        type="submit"
        className={congratulationFormStyles.button}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Отправить
      </motion.button>
    </form>
  );
};

export default CongratulationForm;
