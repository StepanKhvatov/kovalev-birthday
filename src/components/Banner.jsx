import Switcher from "./Switcher";
import bannerStyles from "../styles/Banner.module.css";
import Strip from "./Strip";

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
      <div className={bannerStyles["strip-container"]}>
        <Strip classes={bannerStyles["first-strip"]} />
        <Strip classes={bannerStyles["second-strip"]} />
      </div>
    </section>
  );
};

export default Banner;
