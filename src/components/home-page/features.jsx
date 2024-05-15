import classes from "./features.module.scss";
import FeaturesImage from "../../assets/images/features-img.png";
import { RiArrowRightLine } from "@remixicon/react";
import { FEATURES_DATA } from "../../constants/feaures-data.jsx";

const FeatureSection = () => {
  return (
    <section id="features" className={classes.features}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-0">
          <div className={`${classes.features_image} w-50 text-center`}>
            <img src={FeaturesImage} alt="Features Image" />
          </div>
          <div className={`${classes.features_content} w-50`}>
            <h4>Our Services</h4>
            <h2>
              We'll help you learn what
              <br /> you like
            </h2>
            <p>
              When the service has been completely rendered to the
              <br /> consumer, this particular service
            </p>
            <ServiceSteps />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceSteps = () => {
  return (
    <div className={classes.steps}>
      {FEATURES_DATA.slice(0, 2).map((item) => (
        <div key={item.label} className={classes.steps_content}>
          <span className="text-label">{item.label}</span>
          <div className="d-flex align-items-center justify-content-between gap-0">
            <span
              className={`${classes.steps_count} w-25 d-flex align-items-center`}
            >
              {item.count} <RiArrowRightLine size={20} />
            </span>
            <span className={`${classes.steps_text} w-75`}>
              <p>{item.text}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
