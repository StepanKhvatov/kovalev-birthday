import { motion } from "framer-motion";
import buttonStyles from "../styles/Button.module.css";

const Button = ({ style, disabled, children }) => {
  return (
    <motion.button
      style={style}
      disabled={disabled}
      type="submit"
      className={buttonStyles.button}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
