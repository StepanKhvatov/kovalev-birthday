import Strip from "./Strip";
import doubleStripStyles from "../styles/DoubleStrip.module.css";

const DoubleStrip = () => {
  return (
    <div className={doubleStripStyles.container}>
      <Strip classes={doubleStripStyles["first-strip"]} />
      <Strip classes={doubleStripStyles["second-strip"]} />
    </div>
  );
};

export default DoubleStrip;
