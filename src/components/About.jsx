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
              Hi, I'm <span className="text-emerald-300">Jakub</span>, a
              passionate programmer with 4 years of experience in website
              development. I'm always excited to dive into new projects and love
              to explore the latest technologies. I have a keen eye for detail
              and take pride in writing clean, efficient, and maintainable code.
              When I'm not coding, you can find me drawing, writing, photography
              or creating 3D models, which further fuels my creativity and
              problem-solving skills. I believe that collaboration and
              communication are key to successful software development, and I'm
              always eager to work with talented and motivated individuals to
              bring innovative ideas to life.
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
