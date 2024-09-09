import styles from "../styles/BuildingProcess.module.css";
import React from "react";
import Image from "next/image";
import write from "../public/write.svg";
import discuss from "../public/discuss.svg";
import heart from "../public/heart.svg";
import lineFrame from "../public/line-frame.svg";
import verticalLineFrame from "../public/gradient_vertical.svg";

function BuildingProcess() {
  return (
    <div className={styles["section-container"]}>
      <h4 className={styles["section-title"]}>
        The process of building your next{" "}
        <span className={styles["gradient-text"]}>project</span> in 3 steps
      </h4>
      <div className={styles.processes}>
        <div className={styles["process-1"]}>
          <div className={styles.top}>
            <div className={styles["image-1-container"]}>
              <Image src={write} alt="write" width={32} />
            </div>
            <Image
              src={lineFrame}
              alt="line-frame"
              className={styles["line-frame"]}
            />
          </div>
          <p className={styles.text}>
            {" "}
            Write us a description of your project.{" "}
          </p>
          <Image
            src={verticalLineFrame}
            alt="line-frame"
            className={styles["vertical-line-frame"]}
          />
        </div>
        <div className={styles["process-2"]}>
          <div className={styles.top}>
            <div className={styles["image-2-container"]}>
              <Image src={discuss} alt="discuss" />
            </div>

            <Image
              src={lineFrame}
              alt="line-frame"
              className={styles["line-frame"]}
            />
          </div>
          <p className={styles.text}>
            {" "}
            We discuss the details and start implementation.{" "}
          </p>
          <Image
            src={verticalLineFrame}
            alt="line-frame"
            className={styles["vertical-line-frame"]}
          />
        </div>
        <div className={styles["process-3"]}>
          <div className={styles.top}>
            <div className={styles["image-3-container"]}>
              <Image src={heart} alt="heart" />
            </div>
          </div>
          <p className={styles.text}>
            You get an amazing project that we are all proud of.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuildingProcess;
