import React from "react";
import { motion } from "framer-motion";

import { sectionVariant } from "../utils/motion";
import { styles } from "../styles";
import { work } from "../constants";

const Works = () => {
  return (
    <>
      <section id="work" className="pt-24">
        <motion.div
          className={`${styles.paddingX} mb-4 pt-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`${styles.sectionHeadText}`}>Works</h2>
          <p className={`${styles.sectionSubText}`}>|2| My other projects</p>
        </motion.div>

        <motion.div
          className={`${styles.paddingX} flex justify-center items-center py-24`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {work.map((project) => (
              <div
                key={project.name}
                className="flex flex-col items-center p-8 border rounded-2xl border-lime-700 shadow-2xl shadow-lime-600"
              >
                <h3 className="text-lg text-center pb-2">{project.name}</h3>
                <img
                  src={project.image}
                  alt={`Project ${project.name}`}
                  className="rounded-lg w-full h-auto sm:w-auto sm:h-48"
                />
                <p className="mt-4 text-center">
                  {project.starting_year} - {project.ending_year}
                </p>
                <p className="mt-4 text-center">
                  Used technologies: {project.technology}
                </p>
                <p className="mt-4 text-orange-300">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <p className="mt-4 text-center bg-slate-600 p-4 rounded-lg">
                    Tap me to visit project!
                  </p>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Works;
