import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./ExpertiseCard.module.css";
import { motion } from "framer-motion";

function ExpertiseCard({
  id,
  iconUrl,
  title,
  detail,
  bgColor,
  pushDown,
  projectImage,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [flip, setFlip] = useState(false);

  return (
    <div
      // style={{ marginTop: pushDown === true ? 100 : 0 }}
      className={styles["card-container"]}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{ position: "relative" }}
        animate={{
          rotateY: isHovered ? 180 : 0,
          transition: { type: "tween", duration: 0.8 },
        }}
      >
        <motion.div
          animate={{ opacity: isHovered ? 0 : 1 }}
          className={styles["card-front"]}
          style={
            {
              // width: 204,
              // height: 300,
              // backgroundColor: bgColor,
              // borderRadius: 8,
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <Image src={iconUrl} alt={title} width={48} height={48} />
          <h3 className={styles["expertise-title"]}> {title} </h3>
          <p className={styles["expertise-details"]}> {detail} </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            transition: { type: "tween", duration: 0.8 },
          }}
          style={{ position: "absolute", top: 0 }}
          className={styles["gif-container"]}
        >
          <Image
            src={projectImage}
            alt={title}
            // width={204}
            // height={300}
            className={styles.gif}
            unoptimized={true}
          />
        </motion.div>
      </motion.div>
      {/* <div className={styles["card-details"]}>
        <h3 className={styles["expertise-title"]}> {title} </h3>
        <p className={styles["expertise-details"]}> {detail} </p>
      </div> */}
    </div>
  );
}

export default ExpertiseCard;
