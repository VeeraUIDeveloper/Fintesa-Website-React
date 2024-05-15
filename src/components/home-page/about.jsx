import classes from "./about.module.scss";
import { ABOUT_CARD_DATA } from "../../constants/about-data.jsx";
import Card from "../card/card.jsx";

const AboutSection = () => {
  return (
    <section id="about" className={classes.about}>
      <div className="container">
        <div className={`${classes.about_wrapper} text-center`}>
          <h4>How It Work?</h4>
          <h2>Best tool to manage your app</h2>
          <p>
            Start working with Fintesa that can provide everything you need to
            <br />
            generate awareness, drive traffic, connect.
          </p>
        </div>
        <div
          className={`${classes.about_content} d-flex align-items-center justify-content-between`}
        >
          <AboutCard />
        </div>
      </div>
    </section>
  );
};

export const AboutCard = () => {
  return (
    <>
      {ABOUT_CARD_DATA.map((card, index) => (
        <Card key={index} className="w-100">
          <div className={classes.about_card_icon}>{card.icon}</div>
          <div className={classes.about_card_text}>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        </Card>
      ))}
    </>
  );
};

export default AboutSection;
