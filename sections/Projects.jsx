import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../styles/Projects.module.css";
import { projects } from "../projects";

function Projects({ result }) {
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-details"]}>
        <h3 className={styles["section-title"]}>
          Projects we are{" "}
          <span className={styles["gradient-text"]}> proud</span> of
        </h3>
        <p className={styles["section-subtitle"]}>
          At Enovate, we specialize on high performance immersive digital
          experience aimed at delivering our clients a competitive advantage. We
          deliver industry leading solutions.
        </p>
      </div>
      <div className={styles["project-container"]}>
        {result.map((data) => {
          return (
            <ProjectCard
              key={data.id}
              imgUrl={data.imageLink}
              finished={data.finished}
              description={data.description}
              projectName={data.title}
              projectYear={data.year}
              link={data.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
