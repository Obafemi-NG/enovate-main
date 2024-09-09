import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import styles from "../styles/Projects.module.css";
import { projects } from "../projects";

import prisma from "../lib/prisma";

// export const getStaticProps = async () => {
//   const data = await prisma.project.findMany({
//     where: {
//       finished: true,
//     },
//   });
//   return {
//     props: { result: data },
//   };
// };

function Projects({ result }) {
  // console.log(result);
  return (
    <div className={styles["section-container"]}>
      <div className={styles["section-details"]}>
        <h3 className={styles["section-title"]}>Projects we are proud of</h3>
        <p className={styles["section-subtitle"]}>
          {" "}
          At Enovate we specialize on high performance immersive digital
          experience aimed at delivering our clients a competitive advantage. We
          deliver industry leading solutions.{" "}
        </p>
      </div>
      <div className={styles["project-container"]}>
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              imgUrl={project.imgUrl}
              finished={project.finished}
              description={project.description}
              projectName={project.name}
              projectYear={project.year}
              big={project.big}
              projectTag={project.tags}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
