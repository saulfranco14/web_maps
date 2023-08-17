import React from "react";
import styles from "@/styles/components/inputs.module.css";

const TextInput = ({ type, placeHolder, name, label, value, onChange }) => {
  return (
    <>
      {label && <label className={styles.label} htmlFor={name}>{label}</label>}
      <input
        type={type}
        placeholder={placeHolder}
        name={name}
        id={name}
        className={styles.input}
        autoComplete="new-password"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export { TextInput };
