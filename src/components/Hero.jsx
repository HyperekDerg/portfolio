import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { StationsCanvas } from "./canvas";

export const Hero = ({ setActive }) => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 2100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="w-5 h-5 rounded-full bg-[#FFBE79]"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm&nbsp;
            <span className="text-[#FFBE79] underline decoration-[#FFBE79]">
              Jakub
            </span>
          </h1>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            I'm&nbsp;
            {showTypewriter && (
              <span className="text-emerald-400">
                <Typewriter
                  words={[
                    "React & Vue Programmer",
                    "Backend Developer",
                    "Database Administrator",
                    "Photographer",
                  ]}
                  typeSpeed={50}
                  deleteSpeed={20}
                  delaySpeed={5000}
                  loop
                  cursor={true}
                />
              </span>
            )}
            <br />{" "}
          </motion.p>
        </motion.div>
      </div>
      <StationsCanvas />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="absolute xd:bottom-10 bottom-20 w-full flex justify-center items-center">
          <div>
            <a
              href="#about"
              onClick={() => setActive("About")}
              className="flex justify-center items-center"
              aria-label="Read more"
            >
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-emerald-300 flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-emerald-300 mb-1"
                />
              </div>
            </a>
            <p className="flex justify-center items-center text-emerald-400 pt-4 sm:hidden">
              Click to scroll down and explore!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
