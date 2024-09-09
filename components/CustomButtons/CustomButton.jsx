import React from "react";
import styles from "./CustomButton.module.css";
import Image from "next/image";

const CustomButton = ({ text, icon, variant }) => {
  return (
    <button
      className={`${styles["btn-container"]} ${
        variant === "solid" ? styles.solid : styles.outline
      } `}
    >
      <p className={styles["btn-text"]}> {text} </p>
      <Image src={icon} alt={`${text}-icon`} />
    </button>
  );
};

export default CustomButton;
