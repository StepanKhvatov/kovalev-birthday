import congratulationCardStyles from "../styles/CongratulationCard.module.css";

const transformsArray = [
  "rotate(-5deg)",
  "rotate(3deg)",
  "rotate(2deg)",
  "rotate(6deg)",
  "rotate(5deg)",
  "rotate(2deg)",
  "rotate(-5deg)",
  "rotate(5deg)",
  "rotate(2deg)",
  "rotate(3deg)",
];

const textColorByBackground = {
  "#F2EB3F": "black",
  "#B7F7F7": "black",
  "#0065FF": "white",
  "#F89D98": "white",
  "#000000": "white",
  "#B3B3B3": "white",
};

const CongratulationCard = ({ text, name, color, index }) => {
  return (
    <article
      style={{
        transform: `${
          transformsArray[index % transformsArray.length]
        } scale(0.9)`,
        backgroundColor: color,
        color: textColorByBackground[color],
      }}
      className={congratulationCardStyles.card}
    >
      <p className={congratulationCardStyles.text}>{text}</p>
      <h4 className={congratulationCardStyles.name}>{name}</h4>
    </article>
  );
};

export default CongratulationCard;
