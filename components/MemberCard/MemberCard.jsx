import Image from "next/image";
import React, { useState } from "react";
import styles from "./MemberCard.module.css";

const MemberCard = ({ id, imgUrl, name, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles["under-lay"]}
      key={id}
    >
      <div className={styles["member"]}>
        <div className={styles["image-container"]}>
          <Image
            src={imgUrl}
            alt={name}
            style={
              isHovered
                ? { backgroundColor: "#7683ee" }
                : { backgroundColor: "#FFFFFF" }
            }
            className={styles["member-image"]}
          />
        </div>
        <div className={styles.details}>
          <h4 className={styles.name}> {name} </h4>
          <p className={styles.position}> {position} </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
