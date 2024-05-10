import classes from "./footer.module.scss";
import Logo from "./logo.jsx";
import { getCurrentYear } from "../../utilities/api.jsx";
import SocialLinks from "../../constants/social-links.jsx";
import {
  PRODUCT_MENU,
  COMPANY_MENU,
  SUPPORT_MENU,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "../../constants/footer-data.jsx";

const Footer = () => {
  return (
    <footer className={`${classes.footer} ${classes.bg_primary}`}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export const FooterTop = () => {
  const productMenuList = PRODUCT_MENU.map((menu) => (
    <li key={menu.text}>
      <a href={menu.link}>{menu.text}</a>
    </li>
  ));
  const companyMenuList = COMPANY_MENU.map((menu) => (
    <li key={menu.text}>
      <a href={menu.link}>{menu.text}</a>
    </li>
  ));
  const supportMenuList = SUPPORT_MENU.map((menu) => (
    <li key={menu.text}>
      <a href={menu.link}>{menu.text}</a>
    </li>
  ));

  return (
    <>
      <div className="container">
        <div
          className={`${classes.footer_main} d-flex align-items-start justify-content-center`}
        >
          <div className={`${classes.footer_inner} w-25`}>
            <h6 className="text-white">Product</h6>
            <ul className="p-0">{productMenuList}</ul>
          </div>
          <div className={`${classes.footer_inner} w-25`}>
            <h6 className="text-white">Company</h6>
            <ul className="p-0">{companyMenuList}</ul>
          </div>
          <div className={`${classes.footer_inner} w-25`}>
            <h6 className="text-white">Support</h6>
            <ul className="p-0">{supportMenuList}</ul>
          </div>
          <div className={`${classes.footer_inner} w-25`}>
            <h6 className="text-white">Contact Us</h6>
            <p>{CONTACT_INFO.address}</p>
            <a href="#">{CONTACT_INFO.email_id}</a>
            <a href="#">{CONTACT_INFO.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export const FooterBottom = () => {
  return (
    <>
      <div className="container">
        <div
          className={`${classes.footer_bottom} d-flex align-items-center justify-content-between`}
        >
          <Logo />
          <p>&copy; {getCurrentYear()} Copyright - All rights reserved.</p>
          <SocialLinks justify="center" align="center" {...SOCIAL_LINKS} />
        </div>
      </div>
    </>
  );
};

export default Footer;
