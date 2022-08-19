import congratulationCardStyles from "../styles/CongratulationCard.module.css";

const stylesArray = [
  {
    background: "#B7F7F7",
    color: "black",
    transform: `rotate(-5deg) scale(0.9)`,
  },
  {
    background: "0065FF",
    color: "white",
    transform: `rotate(3deg) scale(0.9)`,
  },
  {
    background: "#F89D98",
    color: "white",
    transform: `rotate(2deg) scale(0.9)`,
  },
  {
    background: "#F2EB3F",
    color: "black",
    transform: `rotate(6deg) scale(0.9)`,
  },
  {
    background: "#000000",
    color: "white",
    transform: `rotate(5deg) scale(0.9)`,
  },
  {
    background: "#B3B3B3",
    color: "white",
    transform: `rotate(2deg) scale(0.9)`,
  },
  {
    background: "#B7F7F7",
    color: "black",
    transform: `rotate(-5deg) scale(0.9)`,
  },
  {
    background: "#0065FF",
    color: "white",
    transform: `rotate(5deg) scale(0.9)`,
  },
  {
    background: "#F89D98",
    color: "white",
    transform: `rotate(2deg) scale(0.9)`,
  },
  {
    background: "#F2EB3F",
    color: "black",
    transform: `rotate(3deg) scale(0.9)`,
  },
];

const CongratulationCard = ({ text, name, index }) => {
  const styleObject = stylesArray[index % stylesArray.length];

  return (
    <article style={styleObject} className={congratulationCardStyles.card}>
      <p className={congratulationCardStyles.text}>{text}</p>
      <h4 className={congratulationCardStyles.name}>{name}</h4>
    </article>
  );
};

export default CongratulationCard;
