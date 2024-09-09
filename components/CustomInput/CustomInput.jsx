import React, { useState } from "react";
import styles from "./CustomInput.module.css";

const CustomInput = ({
  type,
  onChangeHandler,
  placeHolder,
  name,
  value,
  required,
  pattern,
}) => {
  const [focus, setIsFocus] = useState(false);
  const handleBlur = () => {
    setIsFocus(true);
  };
  return (
    <div className={styles["form-control"]}>
      <input
        className={
          focus ? `${styles["error-input"]}` : `${styles["text-input"]}`
        }
        onChange={onChangeHandler}
        onBlur={handleBlur}
        type={type}
        placeholder={placeHolder}
        name={name}
        value={value}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

export default CustomInput;
