import classes from "./hero.module.scss";
import AppStore from "./app-store.png";
import PlayStore from "./play-store.png";
import HeroThumbnail from "./hero-thumb.png";
import { RiMeteorFill } from "@remixicon/react";
import SocialLinks from "../../constants/social-links";
import { SOCIAL_LINKS } from "../../constants/footer-data";

const HeroSection = () => {
  return (
    <section id="home" className={`${classes.hero}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className={`${classes.hero_inner} w-50`}>
            <div className={classes.hero_text}>
              <h5 className="d-flex align-items-center">
                <RiMeteorFill size={20} className="logo-icon" />
                We Are Best
              </h5>
              <h1>
                The Bast Landing Page For <br />
                <span>Your App</span>
              </h1>
              <p>
                Best landing for your App showcase. Follow other investors,
                <br />
                discover companies to believe in.
              </p>
            </div>
            <div className={classes.hero_download_apps}>
              <a href="#" className="hover_animation">
                <img src={AppStore} alt="App Store Download Image" />
              </a>
              <a href="#" className="hover_animation">
                <img src={PlayStore} alt="Play Store Download Image" />
              </a>
            </div>
            <div className={classes.hero_social_links}>
              <h5>Followed By:</h5>
              <SocialLinks justify="start" align="center" {...SOCIAL_LINKS} />
            </div>
          </div>
          <img
            src={HeroThumbnail}
            className={classes.hero_thumbnail}
            alt="Hero Thumbnail Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
