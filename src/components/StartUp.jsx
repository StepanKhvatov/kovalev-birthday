import startUpStyles from "../styles/StartUp.module.css";
import MediaGallery from "./MediaGallery";
import Zenfuse from "../images/zenfuse.jpg";
import Dexsport from "../images/dexsport.jpg";
import Subclub from "../images/subclub.jpg";

const StartUp = () => {
  return (
    <section className={startUpStyles.section}>
      <div className="container">
        <h2 className={`${startUpStyles.title} title`}>Стартапер</h2>
        <MediaGallery media={[Zenfuse, Dexsport, Subclub]} />
      </div>
    </section>
  );
};

export default StartUp;
