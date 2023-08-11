import React from "react";
import PropTypes from "prop-types";
import styles from "@/styles/components/button.module.css";
import Image from "next/image";


const Button = ({ text, onClick, type, typeCss, icon }) => {
  return (
    <button className={styles[typeCss]} onClick={onClick} type={type}>
      {icon && (
        <span className="mr-2">
          <Image src={`/images/${icon}`} alt="Icon" width={20} height={20} />
        </span>
      )}
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  typeCss: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Button.defaultProps = {
  type: "button",
};

export default Button;
