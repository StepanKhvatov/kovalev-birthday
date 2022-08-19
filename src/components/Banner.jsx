import Switcher from "./Switcher";
import bannerStyles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={bannerStyles.section}>
      <div className="container">
        <div className={bannerStyles["title-container"]}>
          <h1 className={bannerStyles.title}>Tada-a-am!</h1>
          <h2 className={bannerStyles.title}>
            It’s your{" "}
            <span className={bannerStyles["gradient-title"]}>birthday</span>
          </h2>
        </div>
        <Switcher />
      </div>
    </section>
  );
};

export default Banner;
