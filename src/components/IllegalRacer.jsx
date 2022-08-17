import illegalRacerStyles from "../styles/IllegalRacer.module.css";

const IllegalRacer = () => {
  return (
    <section>
      <div className="container">
        <h2 className={`title ${illegalRacerStyles.title}`}>гонщик-нелегал</h2>
        <div className={illegalRacerStyles["video-container"]}></div>
      </div>
    </section>
  );
};

export default IllegalRacer;
