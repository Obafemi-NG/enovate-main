import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/HowWeWork.module.css";
import arrowRight from "../public/arrow-right-gray.svg";
import { workData } from "../workData";
import { motion, easeInOut } from "framer-motion";

const HowWeWork = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles["section-container"]}>
      <h3 className={styles["section-title"]}> How we work </h3>
      <div className={styles["work-container"]}>
        {workData.map((data) => {
          return (
            <div className={styles["work-card"]} key={data.id}>
              <div className={styles["icon-container"]}>
                <Image src={data.imgUrl} alt={data.title} />
              </div>
              <h3 className={styles.title}> {data.title} </h3>
              <p className={styles.detail}> {data.detail} </p>
            </div>
          );
        })}
      </div>
      <div className={styles["deliver-container"]}>
        <h4 className={styles["profit-title"]}>
          Let’s help your business increase profits
        </h4>
        <motion.button
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            gap: isHovered ? "10px" : 0,
            transition: { duration: 0.7, ease: easeInOut },
          }}
          className={styles.btn}
        >
          {" "}
          Work with us{" "}
          <div className={styles.arrow}>
            {" "}
            <Image
              src={arrowRight}
              alt="arrow-right"
              className={styles.vector}
            />{" "}
          </div>{" "}
        </motion.button>
      </div>
    </div>
  );
};

export default HowWeWork;
