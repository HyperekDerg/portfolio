import React from "react";
import { motion } from "framer-motion";

import { sectionVariant } from "../utils/motion";
import { wip } from "../assets";
import { styles } from "../styles";

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
          <motion.img
            src={wip}
            alt="Still working on it"
            className="w-8 h-8"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
          />
          <p>&nbsp;Section under construction, check back later!</p>
        </motion.div>
      </section>
    </>
  );
};

export default Works;
