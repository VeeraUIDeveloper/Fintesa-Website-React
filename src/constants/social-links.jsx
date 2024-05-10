import classes from "./social-links.module.scss";

import PropTypes from "prop-types";

import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiInstagramLine,
  RiYoutubeFill,
} from "@remixicon/react";

const SocialLinks = ({
  facebook,
  instagram,
  linkedin,
  twitter,
  youtube,
  justify,
  align,
}) => {
  return (
    <ul
      className={`${classes.social_links} d-flex align-items-${align} justify-content-${justify}`}
    >
      <li>
        <a href={facebook} target="_blank">
          <RiFacebookFill size={18} className="facebook" />
        </a>
      </li>
      <li>
        <a href={twitter} target="_blank">
          <RiTwitterFill size={18} className="twitter" />
        </a>
      </li>
      <li>
        <a href={linkedin} target="_blank">
          <RiLinkedinFill size={18} className="linkedin" />
        </a>
      </li>
      <li>
        <a href={instagram} target="_blank">
          <RiInstagramLine size={18} className="instagram" />
        </a>
      </li>
      <li>
        <a href={youtube} target="_blank">
          <RiYoutubeFill size={18} className="youtube" />
        </a>
      </li>
    </ul>
  );
};

SocialLinks.propTypes = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
};

export default SocialLinks;
