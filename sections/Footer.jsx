import styles from "../styles/Footer.module.css";

import React, { useState } from "react";
import Image from "next/image";
import enovateLogo from "../public/enovate_logo.svg";
import star from "../public/star3.svg";
import mail from "../public/mail.svg";
import Link from "next/link";
import { motion, easeInOut } from "framer-motion";
import { useRouter } from "next/router";

// imported assets
// import arrowWhite from "../public/arrow-right-white.svg";
import handShake from "../public/icons/handshake_white.svg";

function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  return (
    <section className={styles["footer-scaffold"]}>
      <div className={styles["section-container"]}>
        <div className={styles["footer-container"]}>
          <div className={styles.top}>
            <Link href="/" className={styles["top-left"]}>
              <Image
                className={styles["footer-logo"]}
                src={enovateLogo}
                alt="enovate_logo"
                height="auto"
              />
              <p className={styles["logo-description"]}>
                A modern agency focused on giving our clients the best
                experience.
              </p>
            </Link>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20 }}
              className={styles["top-right"]}
            >
              <Image
                className={styles["star-svg"]}
                src={star}
                alt="star"
                width="auto"
                height="auto"
              />
            </motion.div>
          </div>
          <div className={styles.bottom}>
            <div className={styles["contact"]}>
              <motion.button
                animate={{
                  gap: isHovered ? "1rem" : "0.5rem",
                  transition: { duration: 0.7, ease: easeInOut },
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={styles["contact-btn"]}
                onClick={(e) => {
                  e.preventDefault();
                  route.push("/contact");
                }}
              >
                <p>Let&rsquo;s work together</p>
                <Image
                  className={styles["arrow-svg"]}
                  src={handShake}
                  alt="arrow"
                />{" "}
              </motion.button>
              <p className={styles["contact-text"]}>
                Don&rsquo;t like the form? Reach out to us via email or call
              </p>
              <div className={styles["contact-email"]}>
                {" "}
                <div className={styles["contact-icon"]}>
                  {" "}
                  <Image src={mail} alt="mail" />{" "}
                </div>
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:hq@enovate.work";
                  }}
                  className={styles.email}
                >
                  hq@enovate.work
                </p>
              </div>
            </div>
            <div className={styles["location"]}>
              <p className={styles["location-title"]}> We&rsquo;re Remote! </p>
              <p className={styles["location-detail"]}>
                {" "}
                Flexibility is important for great work. We let our team members
                integrate work into their personal lives.{" "}
              </p>
            </div>
            <div className={styles["all-links"]}>
              <div className={styles["links"]}>
                <p className={styles["location-title"]}>Explore </p>
                <ul className={styles["footer-links"]}>
                  <li className={styles.link}>
                    {" "}
                    <Link href="/about">About</Link>{" "}
                  </li>
                  <li className={styles.link}>
                    {" "}
                    <Link href="/contact">Contact</Link>{" "}
                  </li>
                  <li
                    style={{ color: "#767676", fontWeight: 400 }}
                    className={`${styles.link} ${styles.inactive} `}
                  >
                    {" "}
                    <Link href="" onClick={(e) => e.preventDefault()}>
                      Blog
                    </Link>{" "}
                  </li>
                  <li
                    style={{ color: "#767676", fontWeight: 400 }}
                    className={`${styles.link} ${styles.inactive} `}
                  >
                    {" "}
                    <Link href="" onClick={(e) => e.preventDefault()}>
                      Success
                    </Link>{" "}
                  </li>
                </ul>
              </div>
              <div className={styles["socials"]}>
                <p className={styles["location-title"]}>Follow us </p>
                <ul className={styles["footer-links"]}>
                  <li className={styles["socials-link"]}>
                    {" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/enovate.work/"
                    >
                      Instagram
                    </Link>{" "}
                  </li>
                  <li className={styles["socials-link"]}>
                    {" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/EnovateW"
                    >
                      Twitter
                    </Link>{" "}
                  </li>
                  <li className={styles["socials-link"]}>
                    {" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/enovate-51499b265/"
                    >
                      LinkedIn
                    </Link>{" "}
                  </li>
                  <li className={styles["socials-link"]}>
                    {" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.behance.net/enovatework"
                    >
                      Behance
                    </Link>{" "}
                  </li>
                  <li className={styles["socials-link"]}>
                    {" "}
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://dribbble.com/enovate"
                    >
                      Dribbble
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["copyright-section"]}>
            <p className={styles.copyright}>
              {" "}
              © Enovate 2023. All rights reserved.{" "}
              <span className={styles["privacy-policy"]}>
                {" "}
                <Link href="">Privacy Policy</Link>{" "}
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
