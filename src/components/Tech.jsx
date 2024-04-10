import React, { useState } from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { sectionVariant, technlogyVariant } from "../utils/motion";

const Tech = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleClose = () => {
    setSelectedTech(null);
  };

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

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

        <motion.p
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center pt-4"
        >
          Tap to expand!
        </motion.p>

        <motion.div
          className={`${styles.paddingX} flex justify-center py-6`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-row flex-wrap justify-center gap-14 max-w-5xl pt-10">
            {technologies.map((technology) => (
              <motion.div
                className="w-28 h-28 hover:cursor-pointer"
                key={technology.name}
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                onClick={() => handleTechClick(technology)}
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
          <p className="text-white underline underline-offset-4 text-center lg:mx-32">
            Please note that some of the technologies used in my personal
            projects may not reflect my professional level of expertise.
            However, I am constantly learning and improving my skills, and I am
            committed to delivering high-quality work to my clients and
            collaborators.
          </p>
        </motion.div>
      </section>

      {selectedTech && (
        <motion.div
          variants={technlogyVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          onClick={handleClose}
        >
          <div className="bg-[#07131a] border-orange-400 border-2 rounded-lg max-w-xs md:max-w-5xl py-8 w-full">
            <motion.div
              variants={technlogyVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="text-2xl font-bold mb-4 pb-8 text-center">
                {selectedTech.name}
              </h2>
              <p className="text-orange-300 text-lg px-4">
                {selectedTech.description}
              </p>
            </motion.div>
            <div className="flex justify-end">
              <button
                className=" mt-8 py-3 px-16  mr-5 text-sm font-medium text-white rounded-lg bg-emerald-600 sm:w-fit hover:bg-emerald-500"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Tech;
