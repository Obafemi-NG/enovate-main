import Image from "next/image";
import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import arrowRight from "../../public/arrow-right-gray.svg";
import { easeInOut, motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

function ProjectCard({
  imgUrl,
  projectName,
  projectYear,
  description,
  finished,
  big,
  projectTag,
  link,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const route = useRouter();
  return (
    // Web Project Card Container
    <>
      <div
        className={
          big
            ? `${styles["big-card-container"]}`
            : `${styles["card-container"]}`
        }
      >
        <div
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles["image-container"]}
        >
          <Image
            src={imgUrl}
            alt={projectName}
            fill={true}
            className={styles["project-image"]}
          />
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 40,
              transition: { duration: 0.6, ease: easeInOut },
            }}
            className={styles["project-description"]}
          >
            <div className={styles.top}>
              <p className={styles.year}> {projectYear} </p>
              {finished ? (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className={styles["view-project"]}
                >
                  View Project
                  <span className={styles.arrow}>
                    {" "}
                    <Image src={arrowRight} alt="arrow-right" />{" "}
                  </span>{" "}
                </Link>
              ) : (
                <div className={styles["view-project"]}> Coming Soon </div>
              )}
            </div>
            <p className={styles["description"]}>{description}</p>
          </motion.div>
          {/* Project description for tablets */}
          <div className={styles["tablet-project-description"]}>
            <div className={styles.top}>
              <p className={styles.year}> {projectYear} </p>
              {finished ? (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className={styles["view-project"]}
                >
                  View Project
                  <span className={styles.arrow}>
                    {" "}
                    <Image src={arrowRight} alt="arrow-right" />{" "}
                  </span>{" "}
                </Link>
              ) : (
                <div className={styles["view-project"]}> Coming Soon </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles["details"]}>
          <h4 className={styles["project-name"]}> {projectName} </h4>
          <div className={styles["tags"]}>
            {projectTag.map((tag) => {
              return (
                <div className={styles["under-lay"]} key={tag}>
                  <p className={styles["tag"]}>{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Mobile Project container card */}
      <div className={styles["mobile-card-container"]}>
        <div className={styles["mobile-image-container"]}>
          <Image
            src={imgUrl}
            alt={projectName}
            fill={true}
            className={styles["mobile-project-image"]}
            style={{ objectFit: "cover", width: "100%", borderRadius: "16px" }}
          />
          <div className={styles["project-description"]}>
            <div className={styles.top}>
              <p className={styles.year}> {projectYear} </p>
              {finished ? (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link}
                  className={styles["view-project"]}
                >
                  View Project
                  <span className={styles.arrow}>
                    {" "}
                    <Image
                      className={styles["arrow-svg"]}
                      src={arrowRight}
                      alt="arrow-right"
                    />{" "}
                  </span>{" "}
                </Link>
              ) : (
                <div className={styles["view-project"]}> Coming Soon </div>
              )}
            </div>
            <p className={styles["description"]}>{description}</p>
          </div>
        </div>
        <div className={styles["details"]}>
          <h4 className={styles["project-name"]}> {projectName} </h4>
          <div className={styles["tags"]}>
            {projectTag.map((tag) => {
              return (
                <div className={styles["under-lay"]} key={tag}>
                  <p className={styles["tag"]}>{tag}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
