import classes from "./header.module.scss";
import Logo from "./logo";
import { NAV_MENUS } from "../../constants/header-data.jsx";
import Button from "../../ui/button.jsx";
import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Header Function
  useEffect(() => {
    const handleScroll = () => {
      let offset = window.scrollY;
      offset > 70 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${classes.header_wrapper} 
      ${isSticky ? `${classes.sticky_header}` : ""}`}
    >
      <div className={`${classes.header_container} container`}>
        <div className="d-flex align-items-center justify-content-between">
          <Logo />
          <div className={classes.navbar}>
            <ul className={`${classes.navbar_menu} d-flex align-items-center`}>
              {NAV_MENUS.map((menu) => (
                <li key={menu.text}>
                  <a href={menu.link}>{menu.text}</a>
                </li>
              ))}
              <li>
                <Button
                  type="primary"
                  color="light"
                  className="hover_animation"
                  isSticky={isSticky}
                  onClick={() => alert("You Clicked!!")}
                >
                  Sign in
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
