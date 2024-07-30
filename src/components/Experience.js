import React, { useRef } from "react";

import { motion, spring, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Detailes = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8  md:my-2 first:mt-0 dark:text-light last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 xs:text-sm dark:text-light">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm mt-3">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 md:my-16">
      <h2 className="font-bold dark:text-light text-8xl mb-32 w-full text-center md:text-5xl xs:text-4xl md:mb-16 lg:text-5xl">
        Experience
      </h2>

      <div ref={ref} className="mx-auto relative w-[75%] lg:w-[90%] md:w-full ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9  top-0 w-[4px]  h-full dark:text-light dark:bg-light bg-dark origin-top 
md:w-[2px] md:left-[30px] xs:left-[20px]
"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ms-8">
          <Detailes
            position="Software Engineer"
            company="Syntex Solutions"
            time="2020 - 2021"
            address="Polgasowita , Piliyandala"
            work="Syntex Solutions is a company founded by me. I had to do projects with real clients from my first year on campus. For that we had to start separate companies as per the instructions of the campus. The company I started for that is called Syntex Solutions. I have done various projects for real clients under this company. Details about it are available under my projects."
          />

          <Detailes
            position="Software Engineer"
            company="Horizon Software Solutions"
            time="2022 - 2024"
            address="Colombo"
            work="horizon software solutions is a company started by me along with some of my campus friends. There we also did various projects where I got a lot of experience."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
