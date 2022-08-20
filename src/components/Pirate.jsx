import { useState } from "react";
import pirateStyles from "../styles/Pirate.module.css";
import blurImage from "../images/blur.png";
import vintagePeopleImage from "../images/vintage-people.png";

const Pirate = () => {
  const [blur, setBlur] = useState (false)
  return (
    <section className={pirateStyles.section}>
      <div className="container">
        <div className={pirateStyles.content}>
          <div className={pirateStyles["title-container"]}>
            <h2 className={`${pirateStyles.title} title`}>Настоящий пират</h2>
            <p className={pirateStyles.subtitle}>Как говорят все пираты:  «Йо-хо-хо и портовые<button className={pirateStyles.blur} onClick={() => setBlur(!blur)}>{blur ? <img src={blurImage} alt="шлюхи"></img>: `шлюхи`}</button>».  Ну или как-то так. Еще пираты ходят в кино только на пиратские фильсы и имееют сертефикат об обучении</p>
          </div>
          <div className={pirateStyles.card}></div>
          <img alt="people" src={vintagePeopleImage} className={pirateStyles.people}/>
        </div>
      </div>
    </section>
  );
};

export default Pirate;
