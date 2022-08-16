import congratulationCardStyles from "../styles/CongratulationCard.module.css";

const colorsArray = [
  { background: "#B7F7F7", color: "black" },
  { background: "0065FF", color: "white" },
  { background: "#F89D98", color: "white" },
  { background: "#F2EB3F", color: "black" },
  { background: "#000000", color: "white" },
  { background: "#B3B3B3", color: "white" },
  { background: "#B7F7F7", color: "black" },
  { background: "#0065FF", color: "white" },
  { background: "#F89D98", color: "white" },
  { background: "#F2EB3F", color: "black" },
];

const CongratulationCard = ({ text, name, index }) => {
  const styleObject = colorsArray[index % colorsArray.length];

  return (
    <article style={styleObject} className={congratulationCardStyles.card}>
      <p className={congratulationCardStyles.text}>{text}</p>
      <h4 className={congratulationCardStyles.name}>{name}</h4>
    </article>
  );
};

export default CongratulationCard;
