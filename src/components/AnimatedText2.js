import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleChar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.05,
    },
  },
};

const AnimatedText2 = ({ text, className = "" }) => {
  return (
    <div
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden"
    >
      <motion.h1
        className={`inline-block w-full text-slate-500 font-bold ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        whileInView="animate" // This will trigger the animation when the element is in view
        viewport={{ once: false }} // Ensures the animation runs every time the element comes into view
      >
        {text.split(" ").map((word, wordIndex) => (
          <React.Fragment key={word + "-" + wordIndex}>
            {word.split("").map((char, charIndex) => (
              <motion.span key={char + "-" + charIndex} className="inline-block" variants={singleChar}>
                {char}
              </motion.span>
            ))}
            &nbsp;
          </React.Fragment>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText2;
