import Switcher from "./Switcher";
import bannerStyles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={bannerStyles.section}>
      <canvas
        style={{ width: "100%",height: "100%", position: "absolute" }}
        id="canvas"
      ></canvas>
      <div className="container">
        <div className={bannerStyles["title-container"]}>
          <h1 className={`${bannerStyles.title} title`}>Tada-a-am!</h1>
          <h2 className={`${bannerStyles.title} title`}>
            It’s your{" "}
            <span className={`${bannerStyles["gradient-title"]} title`}>
              birthday
            </span>
          </h2>
        </div>
        <Switcher />
      </div>
    </section>
  );
};

export default Banner;
