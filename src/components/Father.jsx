import father from "../images/father.jpg";
import baboon from "../images/baboon.png";
import fatherStyles from "../styles/Father.module.css";

const Father = () => {
  return (
    <section className={fatherStyles.section}>
      <div style={{ position: "relative" }} className="container">
        <img src={baboon} alt="baboon" className={fatherStyles.baboon} />
        <div className={fatherStyles.content}>
          <div className={fatherStyles["image-container"]}>
            <img src={father} alt="father" className={fatherStyles.image} />
          </div>
          <div className={fatherStyles["title-container"]}>
            <h2 className={`${fatherStyles.title} title`}>молодой отец</h2>
            <p className={fatherStyles.subtitle}>
              Молодые мамы хороши. Молодые отцы тоже, знаете ли, ничего ;)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Father;
