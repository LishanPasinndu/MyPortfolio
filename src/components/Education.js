import React, { useRef } from "react";

import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Detailes = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 md:my-2  dark:text-light first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div className=""
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="dark:text-primary text-primary text-start capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type}</h3>
        <span className="dark:text-light capitalize font-medium text-dark/75 md:text-sm  xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm mt-3s dark:text-light">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-16">
      <h2 className="font-bold dark:text-light text-8xl mb-32 md:mt-16 w-full text-center md:text-5xl xs:text-4xl md:mb-16 lg:text-5xl">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative  dark:text-light lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full dark:bg-light bg-dark origin-top dark:text-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start dark:text-light justify-between ml-4">
          <Detailes
            type="Ordinary Level Examination (O/L)"
            time="2018 - 2019"
            place="Mahinda Rajapakshe College - Homagama"
            info="I haved 9A s for Sri Lanka Gov Ordinary Level Exam ."
          />

          <Detailes
            type="Diploma in Software Esngineering"
            time="2020 - 2021"
            place="Java Institute - Colombo"
            info="I have Diploma Qulifications in SE under the UK Awards Frame Work . "
          />

          <Detailes
            type="BEng(Hons) in Software Engineering"
            time="2020 - 2024"
            place="Java Institute - Colombo"
            info="I have Bachelor of Engnineering with Hons Degree in SE with UGC Approved and under the IIC University in Cambodia . "
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
