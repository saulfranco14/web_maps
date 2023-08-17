import React from "react";
import styles from "@/styles/components/inputs.module.css";

const SelectInput = ({ options, placeHolder, name, label, value, onChange }) => {
  return (
    <>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        className={styles.input}
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {placeHolder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export { SelectInput };
