import classes from "./card.module.scss";
import PropTypes from "prop-types";

const Card = ({ children, className }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any.isRequired,
};

export default Card;
