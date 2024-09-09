import Image from "next/image";
import React from "react";
import styles from "../styles/Video.module.css";

// imported assets
import illustration from "../public/images/Framehomepage_illustration.png";

function Video() {
  return (
    <div className={styles["video_section_container"]}>
      <h3 className={styles["video-title"]}>
        Let’s help you build a{" "}
        <span className={styles["gradient-text"]}>brand</span> that customers
        love and competitors envy
      </h3>
      <div className={styles["video_container"]}>
        <Image
          src={illustration}
          alt="illustration"
          className={styles.illustration}
        />
      </div>
    </div>
  );
}

export default Video;
