import React from "react";
import { motion } from "framer-motion";

import { technologies } from "../constants";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
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
          className={`${styles.paddingX} flex justify-center pt-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-row flex-wrap justify-center gap-14 max-w-5xl pt-10">
            {technologies.map((technologies) => (
              <motion.div
                className="w-28 h-28"
                key={technologies.name}
                variants={sectionVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <BallCanvas icon={technologies.icon} />
                <p className="flex justify-center">{technologies.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Tech;
