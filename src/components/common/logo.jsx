import classes from "./logo.module.scss";
import { RiMeteorFill } from "@remixicon/react";

const Logo = () => {
  return (
    <div className={`${classes.logo_wrapper} d-flex align-items-center`}>
      <RiMeteorFill size={30} className={classes.logo_icon} />
      <span className={classes.logo_text}>FINTESA</span>
    </div>
  );
};

export default Logo;
