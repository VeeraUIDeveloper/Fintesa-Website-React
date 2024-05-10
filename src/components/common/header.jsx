import classes from "./header.module.scss";
import Logo from "./logo";
import { NAV_MENUS } from "../../constants/header-data.jsx";

const Header = () => {
  return (
    <header className={classes.header_wrapper}>
      <div className={`${classes.header_container} container`}>
        <div className="d-flex align-items-center justify-content-between">
          <Logo />
          <div className={classes.navbar}>
            <ul className={`${classes.navbar_menu} d-flex`}>
              {NAV_MENUS.map((menu) => (
                <li key={menu.text}>
                  <a href={menu.link}>{menu.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
