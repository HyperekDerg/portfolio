import React from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { sectionVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <section className="pt-24">
        <motion.div
          className={`${styles.paddingX} mb-4 pt-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className={`${styles.sectionSubText}`}>|1| Technologies</p>
        </motion.div>

        <motion.div
          className={`${styles.paddingX} flex justify-center py-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-row flex-wrap justify-center gap-14 max-w-5xl pt-10">
            {technologies.map((technology) => (
              <motion.div
                className="w-28 h-28"
                key={technology.name}
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-28 w-28 object-fit rounded-xl flex justify-center items-center"
                />

                <p className="flex justify-center items-center">
                  {technology.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.paddingX} py-8`}
        >
          <p className="text-white underline underline-offset-4 text-center">
            Please note that some of the technologies used in my personal
            projects may not reflect my professional level of expertise.
            However, I am constantly learning and improving my skills, and I am
            committed to delivering high-quality work to my clients and
            collaborators.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Tech;
