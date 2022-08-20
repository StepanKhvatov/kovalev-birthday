import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import congratulationFormStyles from "../styles/CongratulationForm.module.css";

const colors = [
  "#FFF960",
  "#B7F7F7",
  "#0065FF",
  "#F89D98",
  "#000000",
  "#B3B3B3",
];

const CongratulationForm = ({ setData }) => {
  const [selectedColor, setSelectedColor] = useState("#FFF960");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const onColorSelect = useCallback((color) => {
    setSelectedColor(color);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    const { text, name } = event.target;

    setLoadingSubmit(true);

    fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      body: JSON.stringify({
        text: text.value,
        name: name.value,
        color: selectedColor,
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
          event.target.text.value = "";

          setSelectedColor("#FFF960");
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
      <div className={congratulationFormStyles["actions-container"]}>
        <div className={congratulationFormStyles["colors-container"]}>
          <h3 className={congratulationFormStyles["colors-title"]}>
            Выбери цвет карточки:
          </h3>
          <div className={congratulationFormStyles["colors-buttons-container"]}>
            {colors.map((color) => {
              const borderCololor = color === "#000000" ? "white" : "#000000";

              return (
                <button
                  key={color}
                  aria-label="color-select-button"
                  type="button"
                  onClick={() => onColorSelect(color)}
                  style={{
                    background: color,
                    border:
                      selectedColor === color
                        ? `3px solid ${borderCololor}`
                        : "",
                  }}
                  className={congratulationFormStyles["color-button"]}
                />
              );
            })}
          </div>
        </div>
        <motion.button
          disabled={loadingSubmit}
          type="submit"
          className={congratulationFormStyles.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {loadingSubmit ? "Создаём..." : "Отправить"}
        </motion.button>
      </div>
    </form>
  );
};

export default CongratulationForm;
