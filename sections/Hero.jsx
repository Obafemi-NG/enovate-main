import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Hero.module.css";
import arrowRight from "../public/arrow-right-gray.svg";
import star from "../public/star.svg";
import { easeInOut, motion } from "framer-motion";
import { useRouter } from "next/router";

// imported assets
import heroBg from "../public/images/pathhero_path.png";
import CustomButton from "../components/CustomButtons/CustomButton";
import checklist from "../public/icons/checklist.svg";
import calendar from "../public/icons/calendar.svg";
import mouse from "../public/icons/mouse.svg";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <Image src={heroBg} alt="hero_path_bg" className={styles["path_bg"]} />
        <h1 className={styles["hero-title"]}>
          We create stunning and{" "}
          <span className={styles["gradient-text"]}>
            {" "}
            timeless experiences{" "}
          </span>
        </h1>
        <h2 className={styles["hero-subtitle"]}>
          Enovate is a{" "}
          <span className={styles["bold-text"]}> Design-As-A-Service </span>{" "}
          agency that help startups and business owners with their design
          through a subscription-based plan that fits their budget. We also work
          on their web and mobile applications.
        </h2>
        <div className={styles["btns-container"]}>
          <CustomButton
            text="Check out our subscription"
            variant="solid"
            icon={checklist}
          />
          <CustomButton
            text="Schedule a consultation"
            variant="outline"
            icon={calendar}
          />
        </div>

        {/* <motion.button
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            gap: isHovered ? "12px" : 0,
            transition: { duration: 0.7, ease: easeInOut },
          }}
          className={styles["hero-btn"]}
          onClick={(e) => {
            e.preventDefault();
            route.push("/contact");
          }}
        >
          Let&#39;s create something together
          <div className={styles["arrow-container"]}>
            <Image
              className={styles["arrow-svg"]}
              src={arrowRight}
              alt="arrow-right"
            />
          </div>
        </motion.button> */}
        <div className={styles["hero-bottom"]}>
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20 }}
            className={styles["star-container"]}
          >
            <Image className={styles["hero-star"]} src={star} alt="star" />
          </motion.div> */}
          {/* <motion.div
            animate={{ opacity: 0.5 }}
            transition={{
              duration: 5,
              delay: 0.1,
              repeat: Infinity,
              ease: easeInOut,
            }}
            className={styles["bottom-text"]}
          >
            <p className={styles["get-fascinated"]}>
              {" "}
              Scroll down and get fascinated
            </p>
            <Image src={mouse} alt="mouse_svg" />
          </motion.div> */}
        </div>
      </div>
      <div className={styles["mouse-container"]}>
        <Image src={mouse} alt="mouse" className={styles.mouse} />
        <p className={styles.scroll}> Scroll</p>
      </div>
    </div>
  );
}

export default Hero;
