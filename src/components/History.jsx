import React from "react";
import { motion } from "framer-motion";

import { sectionVariant } from "../utils/motion";
import { styles } from "../styles";
import { history } from "../constants";

const History = () => {
  return (
    <>
      <section id="history" className="pt-24">
        <motion.div
          className={`${styles.paddingX} mb-4 pt-8`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className={`${styles.sectionHeadText}`}>History</h2>
          <p className={`${styles.sectionSubText}`}>|3| My carrier history</p>
        </motion.div>

        <motion.div
          className={`${styles.paddingX} flex justify-center items-center py-24`}
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="grid grid-cols-1">
            {history.map((historyData) => (
              <div
                key={historyData.name}
                className="flex flex-col items-center p-8 lg:mx-32 justify-center border rounded-2xl border-lime-700 shadow-md shadow-lime-600 mt-16    "
              >
                <h3 className="text-lg text-center pb-2 underline underline-offset-[6px]">
                  {historyData.name}
                </h3>
                <div className="w-full h-1 rounded-full bg-orange-300 mt-8"></div>
                <div className="mt-8 lg:px-8 lg:w-2/3 lg:mr-auto">
                  <h4 className="mb-4 text-lg">Description</h4>
                  <p className=" text-orange-300 text-left">
                    {historyData.description}
                  </p>
                </div>
                <div className="lg:flex lg:gap-4 sm:ml-auto">
                  <p className="mt-4 text-center bg-slate-600 p-4 rounded-lg">
                    {historyData.startDate} - {historyData.endDate}
                  </p>
                  <p className="mt-4 text-center bg-slate-600 p-4 rounded-lg">
                    {historyData.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default History;
