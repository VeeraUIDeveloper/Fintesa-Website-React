import classes from "./button.module.scss";
import PropTypes from "prop-types";

const Button = ({
  type,
  color,
  children,
  className,
  onClick,
  isSticky = false,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${classes.btn} 
        ${classes[`btn_${type}`]} 
        ${classes[`btn_${color}`]}
        ${className}
        ${isSticky ? classes[`btn_sticky_${isSticky}`] : ""}`}
      >
        {children}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  isSticky: PropTypes.bool.isRequired,
};

export default Button;
