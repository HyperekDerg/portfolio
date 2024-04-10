import React from "react";
import { motion } from "framer-motion";

import { sectionVariant } from "../utils/motion";
import { styles } from "../styles";
import { warning } from "../assets";
const Contact = () => {
  return (
    <>
      <section id="contact" className="pt-24 mb-16">
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
          className={`${styles.paddingX} py-12`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="w-full flex items-center justify-center">
            <img src={warning} alt="warning" />
          </div>
          <div className="w-full flex items-center justify-center pt-8">
            &nbsp;
            <p>
              Due to the misuse of messaging for spam purposes, contact is only
              possible via email{" "}
              <span className="text-orange-300">
                rudnicki_jakub@outlook.com
              </span>
              . Thank you for understanding.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
