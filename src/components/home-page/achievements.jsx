import classes from "./achievements.module.scss";
import {
  RiTeamLine,
  RiCheckboxLine,
  RiTrophyLine,
  RiHourglassFill,
} from "@remixicon/react";

export const ACHIEVEMENTS_DATA = [
  { icon: <RiTeamLine size={40} />, number: "100,000+", text: "Happy Clients" },
  { icon: <RiCheckboxLine size={40} />, number: "600+", text: "Projects Done" },
  { icon: <RiTrophyLine size={40} />, number: "125", text: "Awward Won" },
  { icon: <RiHourglassFill size={40} />, number: "500K", text: "Work Hours" },
];

const AchievementSection = () => {
  return (
    <section className={classes.achievements}>
      <div className="container">
        <div
          className={`${classes.achievements_wrapper} d-flex flex-wrap align-items-between justify-content-between`}
        >
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <div key={index} className={classes.achievement}>
              <div className={classes.icon}>{item.icon}</div>
              <div className={classes.content}>
                <h2>{item.number}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
