import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/components/button.module.css";
import Image from "next/image";

const Button = ({ text, onClick, type, typeCss, icon, iconPosition, buttonWidth }) => {
  
  const buttonStyle = {
    width: buttonWidth,
  };

  return (
    <button className={styles[typeCss]} onClick={onClick} type={type} style={buttonStyle}>
      {iconPosition === "start" && icon && (
        <span className="mr-2" style={{ width: '20px', height:'20px'}}>
          <Image src={`/images/${icon}`} alt="Icon" width={20} height={20} />
        </span>
      )}
      {text}
      {iconPosition === "end" && icon && (
        <span className="ml-2" style={{ width: '20px', height:'20px'}}>
          <Image src={`/images/${icon}`} alt="Icon" width={20} height={20} />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  typeCss: PropTypes.string.isRequired,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["start", "end"]),
  buttonWidth: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  iconPosition: "start",
};

export default Button;
