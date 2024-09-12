import React from "react";
import Header from "../sections/Header";

// imported styles
import styles from "../styles/projectsPage.module.css";

const Projects = () => {
  return (
    <>
      <Header />
      <div className={styles["page-content"]}>
        <h1 className={styles["page-title"]}> Projects </h1>
        <p className={styles["page-subtitle"]}>
          {" "}
          Enovate is an agency that specializes in design and development of
          websites, web applications and mobile apps. Enovate is an agency that
          specializes in design and development of websites, web applications
          and mobile apps.{" "}
        </p>
      </div>
    </>
  );
};

export default Projects;
