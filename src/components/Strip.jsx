import heartImage from "../images/heart.png";
import stripStyles from "../styles/Strip.module.css";

const Strip = ({ classes = "" }) => {
  return (
    <div className={`${stripStyles.strip} ${classes}`}>
      <img src={heartImage} className={stripStyles.image} alt="heart" />
      <p className={stripStyles.text}>с днем рождения</p>
      <img src={heartImage} className={stripStyles.image} alt="heart" />
      <p className={stripStyles.text}>с днем рождения</p>
      <img src={heartImage} className={stripStyles.image} alt="heart" />
      <p className={stripStyles.text}>с днем рождения</p>
      <img src={heartImage} className={stripStyles.image} alt="heart" />
      <p className={stripStyles.text}>с днем рождения</p>
    </div>
  );
};

export default Strip;
