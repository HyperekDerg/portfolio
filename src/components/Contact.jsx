import React from 'react';
import { motion } from "framer-motion";

import { sectionVariant } from "../utils/motion";
import { styles } from "../styles";
import EmailJs from './EmailJs';
const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-24">
        <motion.div
          className={`${styles.paddingX} mb-4 pt-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`${styles.sectionHeadText}`}>Contact me!</h2>
        </motion.div>

        <motion.div
          className={`${styles.paddingX} flex justify-center items-center py-12`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <EmailJs />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
