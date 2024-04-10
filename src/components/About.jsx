import React from "react";
import { animate, motion } from "framer-motion";

import { styles } from "../styles";
import { headshot } from "../assets";
import { sectionVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <section className="pt-24" id="about">
        <motion.div
          className={`${styles.paddingX} mb-4`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`${styles.sectionHeadText}`}>About me</h2>
          <p className={`${styles.sectionSubText}`}>|0| Introduction</p>
        </motion.div>
        <motion.div
          className="sm:flex sm:justify-center sm:items-center py-4 bg-hero-pattern bg-center"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            className={`py-4 justify-center flex sm:hidden`}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src={headshot}
              alt="headshot"
              className="w-40 h-40 sm:w-2/3 sm:h-2/3 object-fit rounded-full"
            />
          </motion.div>
          <motion.div
            className={`${styles.paddingX} flex justify-center`}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="max-w-4xl sm:text-[18px] text-[16px]">
              Hi, I'm <span className="text-emerald-500">Jakub</span>, a
              passionate programmer focusing on web development. My experience
              is defined by a commitment to clean, efficient code and a drive
              for continuous learning through personal projects and study
              circles. Outside of coding, my creativity thrives in drawing,
              photography and 3D modeling, enhancing my problem-solving skills.
              I value collaboration and am always ready to join forces with
              talented individuals to bring innovative ideas to life.
            </p>
          </motion.div>
          <motion.div
            className={`py-4 hidden justify-center sm:flex`}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src={headshot}
              alt="headshot"
              className="w-64 h-64 sm:w-2/3 sm:h-2/3 object-fit rounded-xl"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
